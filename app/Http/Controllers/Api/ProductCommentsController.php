<?php

namespace App\Http\Controllers\Api;

use DB;
use App\Http\Controllers\Controller;

class ProductCommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $comment = new ProductComments([
            'content' => $request->get('content'),
        ]);
        $comment->save();

        return response()->json('Комментарий успешно добавлен');
    }

    /*public function store(Request $request)
    {
        $product = new Product([
            'title' => $request->get('title'),
            'body' => $request->get('body')
        ]);
        $product->save();


        return response()->json('Product Added Successfully.');
    }*/

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product_comments = DB::table('product_comments')->where('product_slug', $id)->select('id', 'user_id', 'content', 'updated_at')->get();
        $user_info = DB::table('users')->select('id', 'name', 'updated_at', 'logo')->get();

        return response()->json([
            'allComments' => $product_comments,
            'allUsers' => $user_info,
        ]);
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
