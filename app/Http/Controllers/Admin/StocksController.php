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
        return view('admin.stocks.add', []);
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

        if($request->thumbnail || $request->attachment){
            $images = [];
            $ImageDNK = new ImageDNK();

            $thumbnail = $ImageDNK->save($request, 'thumbnail', 'stocks', $objStock->id);

            StockAttachments::create([
                'stock_id' => $objStock->id,
                'type' => $request->attachment ? 'video' : 'image',
                'attachment' => $request->attachment,
                'thumbnail' => $thumbnail,
                'use_us_featured' => $request->use_as_featured
            ]);

            $errors = $ImageDNK->getErrors();
        }

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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
}
