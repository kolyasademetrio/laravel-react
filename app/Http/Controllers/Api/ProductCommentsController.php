<?php

namespace App\Http\Controllers\Api;

use DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Carbon\Carbon;

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
        $current_time = Carbon::now()->toDateTimeString();

        $new_comment = [
            'product_slug' => $request->get('productSlug'),
            'product_id' => $request->get('productID'),
            'user_id' => $request->get('userID'),
            'content' => $request->get('content'),
            'created_at' => $current_time,
            'updated_at' => $current_time,
            'user_name' => $request->get('userName'),
            'user_email' => $request->get('userEmail'),
        ];

        //$comment = ProductComments::create($request->all());

        $comment = new ProductComments($new_comment);
        $saved = $comment->save();

        if ($saved) {
            //id: 7, user_id: 11, content: "sss", updated_at: "2019-04-12 19:23:11", user_name: "Dima"
            return response()->json([
                'id' => $comment->id,// get last inserted id if used save() method
                'user_id' => $request->get('userID'),
                'content' => $request->get('content'),
                'updated_at' => $current_time,
                'user_name' => $request->get('userName'),
            ]);
        } else {
            return 'Произошла ошибка при сохранении комментария. Попробуйте ещё раз.';
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
