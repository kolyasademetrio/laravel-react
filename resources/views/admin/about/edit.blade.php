@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('doyouknows.pages.edit_page_title') !!}</h2>
        <section>
            <form method="post" name="add_videotip_form" action="" class="edit_doyouknow_form row-flex" enctype="multipart/form-data">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>

                <div class="form-group w-100 last">
                    <label for="title">{!! UcfirstCyr::trans('commons.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('commons.form.title') !!}" value="{!! $title !!}">
                </div>

                <div class="form-group w-100 last">
                    <label for="content">{!! UcfirstCyr::trans('commons.form.content') !!}:</label>
                    <textarea type="text" class="form-control" id="content" name="content" placeholder='{!! UcfirstCyr::trans('commons.form.content') !!}'>{!! $content !!}</textarea>
                </div>

                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>

                {!! csrf_field() !!}
            </form>
        </section>
    </main>
@stop

@section('js')
    <script type="text/javascript">
        $(document).ready(function () {

        });
    </script>

    {!! JsValidator::formRequest('App\Http\Requests\AboutRequest'); !!}
@stop