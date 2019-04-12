<?php

namespace App\Http\Controllers\Api;

use DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\ProductComments;

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
        $new_comment = [
            'product_slug' => $request->get('productSlug'),
            'product_id' => $request->get('productID'),
            'user_id' => $request->get('userID'),
            'content' => $request->get('content'),
            'user_name' => $request->get('userName'),
            'user_email' => $request->get('userEmail'),
        ];

        $comment = new ProductComments($new_comment);
        $comment->save();

        return response()->json($new_comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product_comments = DB::table('product_comments')->where('product_slug', $id)->select('id', 'user_id', 'content', 'updated_at', 'user_name', 'user_email')->get();
        $user_info = DB::table('users')->select('id', 'name', 'email', 'updated_at', 'logo')->get();

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
