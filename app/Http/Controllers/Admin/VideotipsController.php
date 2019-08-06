<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ImageDNK;
use App\Http\Requests\VideotipsRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Videotips;

class VideotipsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $videotips = Videotips::get();

        return view('admin.videotips.videotips.index', ['videotips' => $videotips]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.videotips.videotips.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VideotipsRequest $request)
    {
        $validated = $request->validated();

        $validated['show_on_homepage'] = $request->has('show_on_homepage');

        $objVideotip = Videotips::create($validated);

        if(!$objVideotip){
            return back()->with('error', trans('messages.videotips.failedCreated'));
        }

        $images = [];
        $ImageDNK = new ImageDNK();

        $image = $ImageDNK->save($request, 'image', 'videotips', $objVideotip->id);
        if($image){
            $images['image'] = $image;
        }

        if(!empty($images)){
            $videotips = Videotips::findOrFail($objVideotip->id);
            $videotips->fill($images);
            $videotips->save();
        }

        $errors = $ImageDNK->getErrors();

        if($objVideotip){
            return redirect(route('admin.videotips.edit', ['id' => $objVideotip->id]))->with('success', trans('messages.videotips.successCreated'))->withErrors($errors);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $videotip = Videotips::findOrFail($id);

        return view('admin.videotips.videotips.edit', ['videotip' => $videotip]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(VideotipsRequest $request, $id)
    {
        $validated = $request->validated();

        $objVideotip = Videotips::findOrFail($id);

        $validated['show_on_homepage'] = $request->has('show_on_homepage');

        $objVideotip->fill($validated);

        if(!$objVideotip->save()){
            return back()->with('error', trans('messages.products.failedUpdated'));
        }

        $ImageDNK = new ImageDNK();

        $image = $ImageDNK->save($request, 'image', 'videotips', $objVideotip->id);
        if($image){
            $images['image'] = $image;
        }

        if(!empty($images)){
            $objVideotip->image = $image;
            $objVideotip->save();
        }

        $errors = $ImageDNK->getErrors();

        if($objVideotip){
            return back()->with('success', trans('messages.videotips.successUpdated'))->withErrors($errors);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if($request->ajax()){
            $id = (int)$request->id;
            $imageName = $request->imagename;

            $videotipDeleted = Videotips::where('id', $id)->delete();

            if($videotipDeleted){
                ImageDNK::deleteFolder('videotips', $id);
            }

            return $videotipDeleted;
        }
    }

    public function deleteVideotipField(Request $request){
        if($request->ajax()){
            $videitipId = (int)$request->videotipid;
            $imageName = $request->imagename;
            $fieldname = $request->fieldname;

            $deleted = Videotips::where('id', $videitipId)->update([$fieldname => '']);

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }
}
