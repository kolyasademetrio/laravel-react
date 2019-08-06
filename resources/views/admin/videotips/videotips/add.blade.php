@extends('layouts.admin')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('products.pages.add_page_title') !!}</h2>
        <section>
            <form method="post" name="add_videotip_form" action="" class="add_videotip_form row-flex" enctype="multipart/form-data">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::trans('videotips.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('videotips.form.title') !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::trans('videotips.form.slug') !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('videotips.form.slug') !!}" required>
                </div>

                <div class="form-group form-check w-100 last">
                    <input type="checkbox" class="form-check-input" id="show_on_homepage" name="show_on_homepage">
                    <label class="form-check-label" for="show_on_homepage">{!! UcfirstCyr::trans('videotips.form.show_on_homepage') !!}</label>
                </div>

                <div class="container-field-hidden row-flex w-100 last">
                    <div class="form-group w-49">
                        <label for="video">{!! UcfirstCyr::trans('videotips.form.video') !!}:</label>
                        <input type="text" class="form-control hidden-field-control" id="video" name="video" placeholder="{!! trans('videotips.form.video') !!}" value="">
                    </div>
                    <div class="form-group w-49 last field-hidden">
                        <label for="image">{!! UcfirstCyr::trans('videotips.form.image') !!}:</label>
                        <input type="file" class="form-control" id="image" name="image" placeholder="{!! trans('videotips.form.image') !!}" value="">
                        <input type="hidden" name="x1" value="" />
                        <input type="hidden" name="y1" value="" />
                        <input type="hidden" name="w" value="" />
                        <input type="hidden" name="h" value="" />

                        <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                    </div>
                </div>

                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>

                {!! csrf_field() !!}
            </form>
        </section>
    </main>
@stop

@section('js')
    {!! JsValidator::formRequest('App\Http\Requests\VideotipsRequest') !!}
@stop