<?php

namespace App\Http\Controllers\api;

use DB;
use App\Stocks;
use App\StockAttachment;
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
        $stocks = Stocks::all();
        $stock_attachment = StockAttachment::all();

        return response()->json([
            'stocksList' => $stocks,
            'stockAttachment' => $stock_attachment,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $stock = DB::table('stocks')->where('slug', $id)->first();
        $stockID = DB::table('stocks')->where('slug', $id)->select('id')->get();
        $stockAttachments = DB::table('stock_attachments')->where('stock_id', $stockID)->get();

        return response()->json([
            'item' => $stock,
            'attachments' => $stockAttachments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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
    public function destroy($id)
    {
        //
    }
}
