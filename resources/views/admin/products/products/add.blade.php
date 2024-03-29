@extends('layouts.admin')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('products.pages.add_page_title') !!}</h2>
        <section>
            <form method="post" name="add_product_form" action="" class="add_product_form row-flex" enctype="multipart/form-data">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::trans('products.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('products.form.title') !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::trans('products.form.slug') !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('products.form.slug') !!}" required>
                </div>

                <div class="form-group last">
                    <label for="excerpt">{!! UcfirstCyr::trans('products.form.excerpt') !!}:</label>
                    <input type="text" class="form-control" id="excerpt" name="excerpt" placeholder="{!! trans('products.form.excerpt') !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtitle">{!! UcfirstCyr::trans('products.form.descrtitle') !!}:</label>
                    <input type="text" class="form-control" id="descrtitle" name="descrtitle" placeholder="{!! trans('products.form.descrtitle') !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtext">{!! UcfirstCyr::trans('products.form.descrtext') !!}:</label>
                    <input type="text" class="form-control" id="descrtext" name="descrtext" placeholder="{!! trans('products.form.descrtext') !!}" required>
                </div>

                <div class="form-group last">
                    <label for="product_category">{!! UcfirstCyr::trans('products.form.add_product_category') !!}</label>
                    <select name="product_category" id="product_category" class="form-control">
                        <option value="0" selected>{!! trans('products.form.add_product_category') !!}</option>
                        @foreach($categories as $category)
                            <option value="{{ $category->category_id }}">{{ $category->category_name }}</option>
                        @endforeach
                    </select>
                </div>

                <div class="form-group form-check w-100 last">
                    <input type="checkbox" class="form-check-input" id="is_reccomended" name="is_reccomended">
                    <label class="form-check-label" for="is_reccomended">{!! UcfirstCyr::trans('products.form.is_reccomended') !!}</label>
                </div>

                <div class="form-group w-49">
                    <label for="descr">{!! UcfirstCyr::trans('products.form.descr') !!}:</label>
                    <textarea class="form-control" id="descr" name="descr" placeholder="{!! trans('products.form.descr') !!}" required></textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="content">{!! UcfirstCyr::trans('products.form.content') !!}:</label>
                    <textarea class="form-control" id="content" name="content" placeholder="{!! trans('products.form.content') !!}" required></textarea>
                </div>

                <div class="form-group w-23-5">
                    <label for="regular_price">{!! UcfirstCyr::trans('products.form.regular_price') !!}:</label>
                    <input type="number" min="0" step="1" class="form-control" id="regular_price" name="regular_price" placeholder="{!! trans('products.form.regular_price') !!}" required>
                </div>

                <div class="form-group w-23-5">
                    <label for="discount">{!! UcfirstCyr::trans('products.form.discount')!!}, %:</label>
                    <input type="number" min="0" max="100" step="0.1" class="form-control" id="discount" name="discount" placeholder="{!! trans('products.form.discount')!!}" required>
                </div>

                <div class="form-group w-23-5">
                    <label for="sale_price">{!! UcfirstCyr::trans('products.form.sale_price') !!}:</label>
                    <input type="text" class="form-control" id="sale_price" name="sale_price" placeholder="{!! trans('products.form.sale_price') !!}" value="0" readonly>
                </div>

                <div class="form-group w-23-5 last">
                    <label for="currency">{!! UcfirstCyr::trans('products.form.currency') !!}:</label>
                    <input type="text" class="form-control" id="currency" name="currency" placeholder="{!! trans('products.form.currency') !!}" value="{{ $currency->shortname }}" readonly>
                </div>

                <div class="form-group w-49">
                    <label for="image">{!! UcfirstCyr::trans('products.form.image') !!}:</label>
                    <input type="file" class="form-control" id="image" name="image" placeholder="{!! trans('products.form.image') !!}">
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    <img class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display:none;"/>
                </div>

                <div class="form-group w-49 last">
                    <label for="tab_bg">{!! UcfirstCyr::trans('products.form.tab_bg') !!}:</label>
                    <input type="file" class="form-control" id="tab_bg" name="tab_bg" placeholder="{!! trans('products.form.tab_bg') !!}">
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    <img class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display:none;"/>
                </div>

                {{-- Добавить галерею изображений: --}}
                <div class="form-group w-100 last">
                    <label for="image">{!! trans('commons.addImagesGallery') !!}:</label>
                    <input type="file" class="form-control" id="attachment" name="attachment[]" placeholder="{!! trans('products.form.image') !!}" value="" multiple>
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    <div class="attachments-wrapper row-flex row-flex-4">

                    </div>
                </div>

                <div class="container-field-hidden row-flex w-100 last">
                    <div class="form-group w-49">
                        <label for="attachment_video">{!! UcfirstCyr::trans('products.form.attachment_video') !!}:</label>
                        <input type="text" class="form-control hidden-field-control" id="attachment_video" name="attachment_video" placeholder="{!! trans('products.form.attachment_video') !!}" value="">
                    </div>
                    <div class="form-group w-49 last field-hidden">
                        <label for="attachment_preview">{!! UcfirstCyr::trans('products.form.attachment_preview') !!}:</label>
                        <input type="file" class="form-control" id="attachment_preview" name="attachment_preview" placeholder="{!! trans('products.form.attachment_preview') !!}" value="">
                        <input type="hidden" name="x1" value="" />
                        <input type="hidden" name="y1" value="" />
                        <input type="hidden" name="w" value="" />
                        <input type="hidden" name="h" value="" />

                        <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                    </div>
                </div>

                <div class="form-group w-49">
                    <label for="product_description_tab_content">{!! UcfirstCyr::trans('products.form.product_description_tab_content') !!}:</label>
                    <textarea type="text" class="form-control" id="product_description_tab_content" name="product_description_tab_content" placeholder='{!! UcfirstCyr::trans('products.form.product_description_tab_content') !!}'></textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="product_ingredients_tab_content">{!! UcfirstCyr::trans('products.form.product_ingredients_tab_content') !!}:</label>
                    <textarea type="text" class="form-control" id="product_ingredients_tab_content" name="product_ingredients_tab_content" placeholder='{!! UcfirstCyr::trans('products.form.product_ingredients_tab_content') !!}'></textarea>
                </div>

                <div class="form-group w-49">
                    <label for="product_usage_tab_content">{!! UcfirstCyr::trans('products.form.product_usage_tab_content') !!}:</label>
                    <textarea type="text" class="form-control" id="product_usage_tab_content" name="product_usage_tab_content" placeholder='{!! UcfirstCyr::trans('products.form.product_usage_tab_content') !!}'></textarea>
                </div>

                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>

                {!! csrf_field() !!}
            </form>
        </section>
    </main>
@stop

@section('js')
    {!! JsValidator::formRequest('App\Http\Requests\ProductsRequest') !!}
@stop

