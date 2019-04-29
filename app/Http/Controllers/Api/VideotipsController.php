<?php

namespace App\Http\Controllers\api;

use App\Videotips;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VideotipsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $videotips = Videotips::all();

        return response()->json([
            'videotips' => $videotips,
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
     * Display the specified resource.
     *
     * @param  \App\Videotips  $videotips
     * @return \Illuminate\Http\Response
     */
    public function show(Videotips $videotips)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Videotips  $videotips
     * @return \Illuminate\Http\Response
     */
    public function edit(Videotips $videotips)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Videotips  $videotips
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Videotips $videotips)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Videotips  $videotips
     * @return \Illuminate\Http\Response
     */
    public function destroy(Videotips $videotips)
    {
        //
    }
}
