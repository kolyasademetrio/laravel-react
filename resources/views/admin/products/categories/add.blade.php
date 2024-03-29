@extends('layouts.admin')

@section('content')
<main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h2>{!! trans('productCategories.pages.add_page_title') !!}</h2>
    <section>
        <form method="post" action="" class="add_category_form row-flex">
            {!! csrf_field() !!}
            <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>

            <div class="form-group w-49">
                <label for="category_name">{!! UcfirstCyr::trans('productCategories.form.category_name') !!}:</label>
                <input type="text" class="form-control" id="category_name" name="category_name" placeholder="{!! trans('productCategories.form.category_name') !!}" required>
            </div>

            <div class="form-group w-49 last">
                <label for="category_slug">{!! UcfirstCyr::trans('productCategories.form.category_slug') !!}:</label>
                <input type="text" class="form-control" id="category_slug" name="category_slug" placeholder="{!! trans('productCategories.form.category_slug') !!}:" required>
            </div>

            <div class="form-group form-check w-100">
                <input type="checkbox" class="form-check-input" id="show_on_homepage" name="show_on_homepage">
                <label class="form-check-label" for="show_on_homepage">{!! UcfirstCyr::trans('productCategories.form.show_on_homepage') !!}:</label>
            </div>

            <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
        </form>
    </section>
</main>

@stop

@section('js')
    {!! JsValidator::formRequest('App\Http\Requests\ProductsCategoriesRequest') !!}
@stop

