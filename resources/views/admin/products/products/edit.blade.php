@extends('layouts.admin')

@php use \App\Helpers\UcfirstCyr; @endphp


@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('products.pages.edit_page_title') !!} <i>{!! $product->title.'( id-'. $product->id .' )' !!}</i></h2>
        <section>
            <form method="post" action="" class="add_product_form row-flex product-id-{{ $product->id }}" enctype="multipart/form-data">
                <input type="hidden" name="productid" value="{{ $product->id }}">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::trans('products.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('products.form.title') !!}" value="{!! $product->title !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::trans('products.form.slug') !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('products.form.slug') !!}" value="{!! $product->slug !!}" required>
                </div>

                <div class="form-group last">
                    <label for="excerpt">{!! UcfirstCyr::trans('products.form.excerpt') !!}:</label>
                    <input type="text" class="form-control" id="excerpt" name="excerpt" placeholder="{!! trans('products.form.excerpt') !!}" value="{!! $product->excerpt !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtitle">{!! UcfirstCyr::trans('products.form.descrtitle') !!}:</label>
                    <input type="text" class="form-control" id="descrtitle" name="descrtitle" placeholder="{!! trans('products.form.descrtitle') !!}}" value="{!! $product->descrtitle !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtext">{!! UcfirstCyr::trans('products.form.descrtext') !!}:</label>
                    <input type="text" class="form-control" id="descrtext" name="descrtext" placeholder="{!! trans('products.form.descrtext') !!}" value="{!! $product->descrtext !!}" required>
                </div>

                <div class="form-group last">
                    <label for="product_category">{!! UcfirstCyr::trans('products.form.add_product_category') !!}</label>
                    <select name="product_category" id="product_category" class="form-control">
                        @php $productCatsToSelect = 0; @endphp
                        @foreach($categories as $category)
                            @if(!in_array($category->category_id, $productCategories))
                                @php $productCatsToSelect++; @endphp
                            @endif
                        @endforeach

                        <option value="0" selected>{{ $productCatsToSelect ? trans('products.form.add_product_category') : trans('products.form.no_product_category_to_add') }}</option>
                        @foreach($categories as $category)
                            @if(!in_array($category->category_id, $productCategories))
                                <option value="{{ $category->category_id }}">{{ $category->category_name }}</option>
                            @endif
                        @endforeach
                    </select>
                </div>

                <div class="form-group form-check w-32">
                    <input type="checkbox" class="form-check-input" id="is_reccomended" name="is_reccomended" {{ $product->is_reccomended == 1 ? 'checked' : '' }}>
                    <label class="form-check-label" for="is_reccomended">{!! UcfirstCyr::trans('products.form.is_reccomended') !!}</label>
                </div>

                <div class="form-group list-group mb-3 w-66 last">
                    <div class="list-group-item active">{!! UcfirstCyr::trans('products.form.all_product_categories_list') !!}</div>
                    @php $productHasCats = 0; @endphp
                    @foreach($categories as $cat)
                        @if(in_array($cat->category_id, $productCategories))
                            @php $productHasCats++ @endphp
                            <div class="list-group-item">
                                <div class="container w-100">
                                    <div class="row justify-content-between">
                                        <div class="col">{{ $cat->category_name }}</div>
                                        <div class="col-auto">
                                            <a href="" catId="{{ $cat->category_id }}" productId="{{ $product->id }}" class="badge badge-danger delete-product-category">&times;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endforeach
                    @if(!$productHasCats)
                        <div class="list-group-item">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col text-center">{!! UcfirstCyr::trans('products.form.product_has_no_category') !!}</div>
                                </div>
                            </div>
                        </div>
                    @endif
                </div>


                <div class="form-group w-49">
                    <label for="descr">{!! UcfirstCyr::trans('products.form.descr') !!}:</label>
                    <textarea class="form-control" id="descr" name="descr" placeholder="{!! trans('products.form.descr') !!}" required>{!! $product->descr !!}</textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="content">{!! UcfirstCyr::trans('products.form.content') !!}:</label>
                    <textarea class="form-control" id="content" name="content" placeholder="{!! trans('products.form.content') !!}" required>{!! $product->content !!}</textarea>
                </div>

                <div class="form-group w-23-5">
                    <label for="regular_price">{!! UcfirstCyr::trans('products.form.regular_price') !!}:</label>
                    <input type="number" min="0" step="1" class="form-control" id="regular_price" name="regular_price" placeholder="{!! trans('products.form.regular_price') !!}" value="{!! $product->regular_price !!}" required>
                </div>

                <div class="form-group w-23-5">
                    <label for="discount">{!! UcfirstCyr::trans('products.form.discount')!!}, %:</label>
                    <input type="number" min="0" max="100" step="0.1" class="form-control" id="discount" name="discount" placeholder="{!! trans('products.form.discount') !!}" value="{!! $product->discount !!}" required>
                </div>

                <div class="form-group w-23-5">
                    <label for="sale_price">{!! UcfirstCyr::trans('products.form.sale_price') !!}:</label>
                    <input type="text" class="form-control" id="sale_price" name="sale_price" placeholder="{!! trans('products.form.sale_price') !!}" value="{!! $product->sale_price ? $product->sale_price : 0 !!}" readonly>
                </div>

                <div class="form-group w-23-5 last">
                    <label for="currency">{!! UcfirstCyr::trans('products.form.currency') !!}:</label>
                    <input type="text" class="form-control" id="currency" name="currency" placeholder="{!! trans('products.form.currency') !!}" value="{!! $product->currency !!}" readonly>
                </div>

                <div class="form-group w-49">
                    <label for="image">{!! UcfirstCyr::trans('products.form.image') !!}:</label>
                    <input type="file" class="form-control" id="image" name="image" placeholder="{!! trans('products.form.image') !!}" value="">
                    {{-- if item exist place it to value to remove it from disk(not database) when old value changed --}}
                    {{-- $fieldNameExist = $fieldName.'_exists'; --}}
                    <input type="hidden" name="image_exists" value="{{ $product->image }}">
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    @if($product->image)
                        <img sss src="/imagecache/normal/{{ $product->image }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50">
                        <a href="" imagename="{{ $product->image }}" fieldname="image" productid="{{ $product->id }}" class="badge badge-danger delete-product-image">×</a>
                    @else
                        <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                    @endif
                </div>

                <div class="form-group w-49 last">
                    <label for="tab_bg">{!! UcfirstCyr::trans('products.form.tab_bg') !!}:</label>
                    <input type="file" class="form-control" id="tab_bg" name="tab_bg" placeholder="{!! trans('products.form.tab_bg') !!}" value="">
                    {{-- if item exist place it to value to remove it from disk(not database) when old value changed --}}
                    {{-- $fieldNameExist = $fieldName.'_exists'; --}}
                    <input type="hidden" name="tab_bg_exists" value="{{ $product->tab_bg }}">
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    @if($product->tab_bg)
                        <img src="/imagecache/normal/{{ $product->tab_bg }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50">
                        <a href="" imagename="{{ $product->tab_bg }}" fieldname="tab_bg" productid="{{ $product->id }}" class="badge badge-danger delete-product-image">×</a>
                    @else
                        <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                    @endif
                </div>


                {{-- Adding gallery images: --}}
                <div class="form-group w-100 last">
                    <label for="image">{!! UcfirstCyr::trans('products.form.attachment') !!}:</label>
                    <input type="file" class="form-control" id="attachment" name="attachment[]" placeholder="{!! trans('products.form.attachment') !!}" value="" multiple>
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    <div class="product-attachments-wrapper row-flex row-flex-4">
                        @if($attachments)
                            @foreach($attachments as $key=>$attachment)
                                @if($attachment->type == 'image')
                                    <div class="w-23-5 mr-2-p exists">
                                        <img src="/imagecache/normal/{{ $attachment->attachment }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-90">
                                        <a href="" attachmentid="{{ $attachment->id }}" imagename="{{ $attachment->attachment }}" productid="{{ $product->id }}" class="badge badge-danger delete-product-image">×</a>
                                    </div>
                                @endif
                            @endforeach
                        @endif
                    </div>
                </div>

                <div class="container-field-hidden row-flex w-100 last">
                    <div class="form-group w-49">
                        <label for="attachment_video">{!! UcfirstCyr::trans('products.form.attachment_video') !!}:</label>
                        <input type="text" class="form-control" id="attachment_video" name="attachment_video" placeholder="{!! trans('products.form.attachment_video') !!}" value="{!! optional($video)->attachment !!}">
                    </div>
                    <div class="form-group w-49 last{{ optional($video)->attachment ? '' : ' field-hidden' }}">
                        <label for="attachment_preview">{!! UcfirstCyr::trans('products.form.attachment_preview') !!}:</label>
                        <input type="file" class="form-control" id="attachment_preview" name="attachment_preview" placeholder="{!! trans('products.form.attachment_preview') !!}" value="{!! $product->attachment_preview !!}">
                         {{-- if item exist place it to value to remove it from disk(not database) when old value changed --}}
                         {{-- $fieldNameExist = $fieldName.'_exists'; --}}
                        <input type="hidden" name="attachment_preview_exists" value="{{ optional($video)->attachment_preview }}">
                        <input type="hidden" name="x1" value="" />
                        <input type="hidden" name="y1" value="" />
                        <input type="hidden" name="w" value="" />
                        <input type="hidden" name="h" value="" />

                        @if(optional($video)->attachment_preview)
                            <img src="/imagecache/normal/{{ optional($video)->attachment_preview }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50">
                            <a href="" attachmentpreview="{{ optional($video)->id }}" imagename="{{ optional($video)->attachment_preview }}" fieldname="" productid="{{ $product->id }}" class="badge badge-danger delete-product-image">×</a>
                        @else
                            <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                        @endif
                    </div>
                </div>

                <div class="form-group w-49">
                    <label for="product_description_tab_content">{!! UcfirstCyr::trans('products.form.product_description_tab_content') !!}:</label>
                    <textarea type="text" class="form-control" id="product_description_tab_content" name="product_description_tab_content" placeholder='{!! trans('products.form.product_description_tab_content') !!}'>{!! $product->product_description_tab_content !!}</textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="product_ingredients_tab_content">{!! UcfirstCyr::trans('products.form.product_ingredients_tab_content') !!}:</label>
                    <textarea type="text" class="form-control" id="product_ingredients_tab_content" name="product_ingredients_tab_content" placeholder='{!! trans('products.form.product_ingredients_tab_content') !!}'>{!! $product->product_ingredients_tab_content !!}</textarea>
                </div>

                <div class="form-group w-49">
                    <label for="product_usage_tab_content">{!! UcfirstCyr::trans('products.form.product_usage_tab_content') !!}:</label>
                    <textarea type="text" class="form-control" id="product_usage_tab_content" name="product_usage_tab_content" placeholder='{!! trans('products.form.product_usage_tab_content') !!}'>{!! $product->product_usage_tab_content !!}</textarea>
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
            // Product categories deleting
            $('.delete-product-category').on('click', function(e){
                e.preventDefault();
                if(confirm('{!! trans('messages.productsCategories.confirmRemoving') !!}')){
                    let product_id = $(this).attr('productId'),
                        category_id = $(this).attr('catId');

                    $.ajax({
                        type: "DELETE",
                        url: "{!! route('admin.products.productcategory.delete') !!}",
                        data: {
                            _token:"{{ csrf_token() }}",
                            category_id: category_id,
                            product_id: product_id,
                        },
                        success: function(data){
                            if(data){
                                alert("{!! trans('messages.productsCategories.successDeleting') !!}");
                                location.reload();
                            } else {
                                alertify.error("{!! trans('messages.productsCategories.failedDeleting') !!}");
                            }
                        },
                        error: function () {
                            alertify.error("{!! trans('messages.productsCategories.failedDeleting') !!}");
                        }
                    });
                } else {
                    alertify.error("{!! trans('commons.actionCanceledByUser') !!}");
                }
            });

            // Product images deleting
            $('.delete-product-image').on('click', function(e){
                e.preventDefault();
                if(confirm("{!! trans('messages.images.confirmRemoving') !!}")){
                    let data = {_token:"{{ csrf_token() }}"},
                        route = '';

                    $(this).each(function() {
                        $.each(this.attributes, function() {
                            // this.attributes is not a plain object, but an array
                            // of attribute nodes, which contain both the name and value
                            if(this.specified && this.name !== 'href' && this.name !== 'class') {
                                data[this.name] = this.value;
                            }
                        });
                    });

                    if(data.attachmentid){
                        route = "{!! route('admin.products.productattachment.delete') !!}";
                    } else if(data.attachmentpreview){
                        route = "{!! route('admin.products.productattachmentpreview.delete') !!}";
                    } else if(data.fieldname){
                        route = "{!! route('admin.products.productfileld.delete') !!}";
                    }

                    if(route !== ''){
                        $.ajax({
                            type: "DELETE",
                            url: route,
                            data: data,
                            success: function(result){
                                if(result){
                                    alert("{!! trans('messages.images.successDeleting') !!}");
                                    location.reload();
                                } else {
                                    alertify.error("{!! trans('messages.images.failedDeleting') !!}");
                                }
                            },
                            error: function(){
                                alertify.error("{!! trans('messages.images.failedDeleting') !!}");
                            }
                        });
                    }
                } else {
                    alertify.error("{!! trans('commons.actionCanceledByUser') !!}");
                }
            });
        });
    </script>

    {!! JsValidator::formRequest('App\Http\Requests\ProductsRequest') !!}
@stop