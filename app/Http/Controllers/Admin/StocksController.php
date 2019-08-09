<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ImageDNK;
use App\Http\Requests\StocksRequest;
use App\StockAttachments;
use App\Stocks;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StocksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stocks = Stocks::get();
        $stockAttachments = StockAttachments::get();

        return view('admin.stocks.index', ['stocks' => $stocks, 'stockAttachments' => $stockAttachments]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.stocks.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StocksRequest $request)
    {
        $validated = $request->validated();

        $objStock = Stocks::create($validated);

        if(!$objStock){
            return back()->with('error', trans('messages.stocks.failedCreated'));
        }

        $ImageDNK = new ImageDNK();

        if($request->thumbnail || $request->attachment){
            $thumbnail = $ImageDNK->save($request, 'thumbnail', 'stocks', $objStock->id);

            StockAttachments::create([
                'stock_id' => $objStock->id,
                'type' => $request->attachment ? 'video' : 'image',
                'attachment' => $request->attachment,
                'thumbnail' => $thumbnail,
                'use_us_featured' => $request->use_as_featured,
            ]);
        }

        if($request->attachments){
            foreach($request->attachments as $image){
                $attachment = $ImageDNK->saveMultiple($image, 'attachments', 'stocks', $objStock->id);
                if( $attachment ){
                    StockAttachments::create([
                        'stock_id' => $objStock->id,
                        'attachment' => $attachment,
                        'thumbnail' => $attachment,
                        'type' => 'image',
                    ]);
                }
            }
        }

        $errors = $ImageDNK->getErrors();

        if($objStock){
            return redirect(route('admin.stocks.edit', ['id' => $objStock->id]))->with('success', trans('messages.stocks.successCreated'))->withErrors($errors);
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
        $stock = Stocks::findOrFail($id);
        $attachments = StockAttachments::where('stock_id', $id)->get();
        $video = StockAttachments::where(['stock_id' => $id, 'type' => 'video'])->first();

        return view('admin.stocks.edit', ['stock' => $stock, 'attachments' => $attachments, 'video' => $video]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StocksRequest $request, $id)
    {
        $validated = $request->validated();

        $objStock = Stocks::findOrFail($id);

        $objStock->fill($validated);

        if(!$objStock->save()){
            return back()->with('error', trans('messages.stocks.failedUpdated'));
        }

        // TODO: Доделать обновление Акции
        if($request->attachment){
            StockAttachments::updateOrCreate(
                ['stock_id' => $id, 'type' => 'video'],
                [
                    'attachment' => $request->attachment,
                ]
            );
        }

        $ImageDNK = new ImageDNK();

        $thumbnail = $ImageDNK->save($request, 'thumbnail', 'stocks', $request->stockid);

        if($thumbnail){
            StockAttachments::updateOrCreate(
                ['stock_id' => $id, 'type' => 'video'],
                [
                    'thumbnail' => $thumbnail,
                ]
            );
        }

        if($request->attachments){
            foreach($request->attachments as $image){
                $attachment = $ImageDNK->saveMultiple($image, 'attachments', 'stocks', $objStock->id);
                if( $attachment ){
                    StockAttachments::create([
                        'stock_id' => $objStock->id,
                        'attachment' => $attachment,
                        'thumbnail' => $attachment,
                        'type' => 'image',
                    ]);
                }
            }
        }

        $errors = $ImageDNK->getErrors();

        if($objStock){
            return redirect(route('admin.stocks.edit', ['id' => $objStock->id]))->with('success', trans('messages.stocks.successUpdated'))->withErrors($errors);
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

            $stockDeleted = Stocks::where('id', $id)->delete();

            if($stockDeleted){
                StockAttachments::where('stock_id', $id)->delete();
                ImageDNK::deleteFolder('stocks', $id);
            }

            echo $stockDeleted;
        }
    }

    public function deleteStockAttachment(Request $request){
        if($request->ajax()){
            $stockId = (int)$request->stockid;
            $imageName = $request->imagename;
            $attachmentId = (int)$request->attachmentid;

            $deleted = StockAttachments::where('stock_id', $stockId)->where('id', $attachmentId)->delete();

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }

    public function deleteStockAttachmentPreview(Request $request){
        if($request->ajax()){
            $stockId = (int)$request->stockid;
            $imageName = $request->imagename;
            $attachmentId = (int)$request->attachmentpreview;

            $deleted = StockAttachments::where('stock_id', $stockId)->where('id', $attachmentId)->update(['thumbnail' => '',]);

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }
}
