@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('stocks.pages.add_page_title') !!}</h2>
        <section>
            <form method="post" name="add_videotip_form" action="" class="add_stock_form row-flex" enctype="multipart/form-data">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::trans('stocks.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('stocks.form.title') !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::trans('stocks.form.slug') !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('stocks.form.slug') !!}" required>
                </div>

                <div class="form-group w-49">
                    <label for="excerpt">{!! UcfirstCyr::trans('stocks.form.excerpt') !!}:</label>
                    <textarea type="text" class="form-control" id="excerpt" name="excerpt" placeholder='{!! UcfirstCyr::trans('stocks.form.excerpt') !!}'></textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="content">{!! UcfirstCyr::trans('stocks.form.content') !!}:</label>
                    <textarea type="text" class="form-control" id="content" name="content" placeholder='{!! UcfirstCyr::trans('stocks.form.content') !!}'></textarea>
                </div>

                {{-- Добавить галерею изображений: --}}
                <div class="form-group w-100 last">
                    <label for="attachments">Добавить галерею изображений:</label>
                    <input type="file" class="form-control" id="attachments" name="attachments[]" placeholder="{!! trans('stocks.form.image') !!}" value="" multiple>
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    <div class="attachments-wrapper row-flex row-flex-4">

                    </div>
                </div>

                <div class="container-field-hidden row-flex w-100 last">
                    <div class="form-group w-49">
                        <label for="attachment">{!! UcfirstCyr::trans('stocks.form.attachment') !!}:</label>
                        <input type="text" class="form-control hidden-field-control" id="attachment" name="attachment" placeholder="{!! trans('stocks.form.attachment') !!}" value="">
                    </div>
                    <div class="form-group w-49 last field-hidden">
                        <label for="image">{!! UcfirstCyr::trans('stocks.form.thumbnail') !!}:</label>
                        <input type="file" class="form-control" id="thumbnail" name="thumbnail" placeholder="{!! trans('stocks.form.thumbnail') !!}" value="">
                        <input type="hidden" name="x1" value="" />
                        <input type="hidden" name="y1" value="" />
                        <input type="hidden" name="w" value="" />
                        <input type="hidden" name="h" value="" />

                        <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                    </div>
                </div>

                <div class="form-group form-check w-100 last">
                    <input type="checkbox" class="form-check-input" id="use_as_featured" name="use_as_featured">
                    <label class="form-check-label" for="use_as_featured">{!! UcfirstCyr::trans('stocks.form.use_as_featured') !!}</label>
                </div>

                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>

                {!! csrf_field() !!}
            </form>
        </section>
    </main>
@stop

@section('js')
    {!! JsValidator::formRequest('App\Http\Requests\StocksRequest'); !!}
@stop