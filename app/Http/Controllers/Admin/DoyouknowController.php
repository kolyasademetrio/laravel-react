<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ImageDNK;
use App\Http\Requests\DoyouknowRequest;
use App\Doyouknows;
use App\DoyouknowAttachment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DoyouknowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doyouknows = Doyouknows::get();
        $doyouknowsAttachments = DoyouknowAttachment::get();

        return view('admin.doyouknows.index', [
            'doyouknows' => $doyouknows,
            'doyouknowsAttachments' => $doyouknowsAttachments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.doyouknows.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DoyouknowRequest $request)
    {
        $validated = $request->validated();

        $objDoyouknow = Doyouknows::create($validated);

        if(!$objDoyouknow){
            return back()->with('error', trans('messages.doyouknows.failedCreated'));
        }

        $ImageDNK = new ImageDNK();

        if($request->thumbnail || $request->attachment){
            $thumbnail = $ImageDNK->save($request, 'thumbnail', 'doyouknows', $objDoyouknow->id);

            DoyouknowAttachment::create([
                'doyouknow_id' => $objDoyouknow->id,
                'type' => $request->attachment ? 'video' : 'image',
                'attachment' => $request->attachment,
                'thumbnail' => $thumbnail,
                'use_us_featured' => $request->use_as_featured,
            ]);
        }

        if($request->attachments){
            foreach($request->attachments as $image){
                $attachment = $ImageDNK->saveMultiple($image, 'attachments', 'doyouknows', $objDoyouknow->id);
                if( $attachment ){
                    DoyouknowAttachment::create([
                        'doyouknow_id' => $objDoyouknow->id,
                        'attachment' => $attachment,
                        'thumbnail' => $attachment,
                        'type' => 'image',
                    ]);
                }
            }
        }

        $errors = $ImageDNK->getErrors();

        if($objDoyouknow){
            return redirect(route('admin.doyouknows.edit', ['id' => $objDoyouknow->id]))->with('success', trans('messages.doyouknows.successCreated'))->withErrors($errors);
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
        $doyouknow = Doyouknows::findOrFail($id);
        $attachments = DoyouknowAttachment::where('doyouknow_id', $id)->get();
        $video = DoyouknowAttachment::where(['doyouknow_id' => $id, 'type' => 'video'])->first();

        return view('admin.doyouknows.edit', ['doyouknow' => $doyouknow, 'attachments' => $attachments, 'video' => $video]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DoyouknowRequest $request, $id)
    {
        $validated = $request->validated();

        $objDoyouknow = Doyouknows::findOrFail($id);

        $objDoyouknow->fill($validated);

        if(!$objDoyouknow->save()){
            return back()->with('error', trans('messages.doyouknows.failedUpdated'));
        }

        // TODO: Доделать обновление Акции
        DoyouknowAttachment::updateOrCreate(
            ['doyouknow_id' => $id, 'type' => 'video'],
            [
                'attachment' => $request->attachment,
                'use_as_featured' => $request->has('use_as_featured'),
            ]
        );

        $ImageDNK = new ImageDNK();

        $thumbnail = $ImageDNK->save($request, 'thumbnail', 'doyouknows', $request->doyouknowid);

        if($thumbnail){
            DoyouknowAttachment::updateOrCreate(
                ['doyouknow_id' => $id, 'type' => 'video'],
                [
                    'thumbnail' => $thumbnail,
                ]
            );
        }

        if($request->attachments){
            foreach($request->attachments as $image){
                $attachment = $ImageDNK->saveMultiple($image, 'attachments', 'doyouknows', $objDoyouknow->id);
                if( $attachment ){
                    DoyouknowAttachment::create([
                        'doyouknow_id' => $objDoyouknow->id,
                        'attachment' => $attachment,
                        'thumbnail' => $attachment,
                        'type' => 'image',
                    ]);
                }
            }
        }

        $errors = $ImageDNK->getErrors();

        if($objDoyouknow){
            return redirect(route('admin.doyouknows.edit', ['id' => $objDoyouknow->id]))->with('success', trans('messages.doyouknows.successUpdated'))->withErrors($errors);
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
            $id = $request->id;

            $doyouknowDeleted = Doyouknows::where('id', $id)->delete();

            if($doyouknowDeleted){
                DoyouknowAttachment::where('stock_id', $id)->delete();
                ImageDNK::deleteFolder('doyouknows', $id);
            }

            echo $doyouknowDeleted;
        }
    }

    public function deleteDoyouknowAttachment(Request $request){
        if($request->ajax()){
            $doyouknowId = (int)$request->doyouknowid;
            $imageName = $request->imagename;
            $attachmentId = (int)$request->attachmentid;

            $deleted = DoyouknowAttachment::where('doyouknow_id', $doyouknowId)->where('id', $attachmentId)->delete();

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }

    public function deleteDoyouknowAttachmentPreview(Request $request){
        if($request->ajax()){
            $doyouknowId = (int)$request->doyouknowid;
            $imageName = $request->imagename;
            $attachmentId = (int)$request->attachmentpreview;

            $deleted = DoyouknowAttachment::where('doyouknow_id', $doyouknowId)->where('id', $attachmentId)->update(['thumbnail' => '',]);

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }
}
