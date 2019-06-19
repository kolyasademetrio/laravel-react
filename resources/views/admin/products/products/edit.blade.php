@extends('layouts.admin')

@php use App\Helpers\UcfirstCyr; @endphp

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h1>Редактировать товар</h1>
        <section>
            <form method="post" action="" class="add_product_form" enctype="multipart/form-data">
                <p class="w-100"><button type="submit" class="btn btn-success">Сохранить изменения</button></p>

                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::get(trans('validation.labels.product.title')) !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('validation.labels.product.title') !!}" value="{!! $product->title !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::get(trans('validation.labels.product.slug')) !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('validation.labels.product.slug') !!}" value="{!! $product->slug !!}" required>
                </div>

                <div class="form-group last">
                    <label for="excerpt">{!! UcfirstCyr::get(trans('validation.labels.product.excerpt')) !!}:</label>
                    <input type="text" class="form-control" id="excerpt" name="excerpt" placeholder="{!! trans('validation.labels.product.excerpt') !!}" value="{!! $product->excerpt !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtitle">{!! UcfirstCyr::get(trans('validation.labels.product.descrtitle')) !!}}:</label>
                    <input type="text" class="form-control" id="descrtitle" name="descrtitle" placeholder="{!! trans('validation.labels.product.descrtitle') !!}}" value="{!! $product->descrtitle !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtext">{!! UcfirstCyr::get(trans('validation.labels.product.descrtext')) !!}:</label>
                    <input type="text" class="form-control" id="descrtext" name="descrtext" placeholder="{!! trans('validation.labels.product.descrtext') !!}" value="{!! $product->descrtext !!}" required>
                </div>

                <div class="form-group last">
                    <label for="product_category">{!! UcfirstCyr::get(trans('validation.labels.product.add_product_category')) !!}</label>
                    <select name="product_category" id="product_category" class="form-control">
                        @php $productCatsToSelect = 0; @endphp
                        @foreach($categories as $category)
                            @if(!in_array($category->category_id, $productCategories))
                                @php $productCatsToSelect++; @endphp
                            @endif
                        @endforeach

                        <option value="0" selected>{{ $productCatsToSelect ? trans('validation.labels.product.add_product_category') : trans('validation.labels.product.no_product_category_to_add') }}</option>
                        @foreach($categories as $category)
                            @if(!in_array($category->category_id, $productCategories))
                                <option value="{{ $category->category_id }}">{{ $category->category_name }}</option>
                            @endif
                        @endforeach
                    </select>
                </div>

                <div class="form-group form-check w-32">
                    <input type="checkbox" class="form-check-input" id="is_reccomended" name="is_reccomended" {{ $product->is_reccomended == 1 ? 'checked' : '' }}>
                    <label class="form-check-label" for="is_reccomended">{!! UcfirstCyr::get(trans('validation.labels.product.is_reccomended')) !!}</label>
                </div>

                <div class="form-group list-group mb-3 w-66 last">
                    <div class="list-group-item active">{!! UcfirstCyr::get(trans('validation.labels.product.all_product_categories_list')) !!}</div>
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
                                    <div class="col text-center">{!! UcfirstCyr::get(trans('validation.labels.product.product_has_no_category')) !!}</div>
                                </div>
                            </div>
                        </div>
                    @endif
                </div>


                <div class="form-group w-49">
                    <label for="descr">{!! UcfirstCyr::get(trans('validation.labels.product.descr')) !!}:</label>
                    <textarea class="form-control" id="descr" name="descr" placeholder="{!! trans('validation.labels.product.descr') !!}" required>{!! $product->descr !!}</textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="content">{!! UcfirstCyr::get(trans('validation.labels.product.content')) !!}:</label>
                    <textarea class="form-control" id="content" name="content" placeholder="{!! trans('validation.labels.product.content') !!}" required>{!! $product->content !!}</textarea>
                </div>

                <div class="form-group w-23-5">
                    <label for="regular_price">{!! UcfirstCyr::get(trans('validation.labels.product.regular_price')) !!}:</label>
                    <input type="number" min="0" step="1" class="form-control" id="regular_price" name="regular_price" placeholder="{!! trans('validation.labels.product.regular_price') !!}" value="{!! $product->regular_price !!}" required>
                </div>

                <div class="form-group w-23-5">
                    <label for="discount">{!! UcfirstCyr::get(trans('validation.labels.product.discount')) !!}, %:</label>
                    <input type="number" min="0" max="100" step="0.1" class="form-control" id="discount" name="discount" placeholder="{!! trans('validation.labels.product.discount') !!}" value="{!! $product->discount !!}" required>
                </div>

                <div class="form-group w-23-5">
                    <label for="sale_price">{!! UcfirstCyr::get(trans('validation.labels.product.sale_price')) !!}:</label>
                    <input type="text" class="form-control" id="sale_price" name="sale_price" placeholder="{!! trans('validation.labels.product.sale_price') !!}" value="{!! $product->sale_price ? $product->sale_price : 0 !!}" readonly>
                </div>

                <div class="form-group w-23-5 last">
                    <label for="currency">{!! UcfirstCyr::get(trans('validation.labels.product.currency')) !!}:</label>
                    <input type="text" class="form-control" id="currency" name="currency" placeholder="{!! trans('validation.labels.product.currency') !!}" value="{!! $product->currency !!}" readonly>
                </div>

                <div class="form-group w-49">
                    <label for="image">{!! UcfirstCyr::get(trans('validation.labels.product.image')) !!}:</label>
                    <input type="file" class="form-control" id="image" name="image" placeholder="trans('validation.labels.product.image')" value="{!! $product->image !!}">
                </div>

                <div class="form-group w-49 last">
                    <label for="tab_bg">{!! UcfirstCyr::get(trans('validation.labels.product.tab_bg')) !!}:</label>
                    <input type="file" class="form-control" id="tab_bg" name="tab_bg" placeholder="{!! trans('validation.labels.product.tab_bg') !!}" value="{!! $product->tab_bg !!}">
                </div>


                <div class="form-group w-49">
                    <label for="product_description_tab_content">{!! UcfirstCyr::get(trans('validation.labels.product.product_description_tab_content')) !!}:</label>
                    <textarea type="text" class="form-control" id="product_description_tab_content" name="product_description_tab_content" placeholder='{!! trans('validation.labels.product.product_description_tab_content') !!}'>{!! $product->product_description_tab_content !!}</textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="product_ingredients_tab_content">{!! UcfirstCyr::get(trans('validation.labels.product.product_ingredients_tab_content')) !!}:</label>
                    <textarea type="text" class="form-control" id="product_ingredients_tab_content" name="product_ingredients_tab_content" placeholder='{!! trans('validation.labels.product.product_ingredients_tab_content') !!}'>{!! $product->product_ingredients_tab_content !!}</textarea>
                </div>

                <div class="form-group w-49">
                    <label for="product_usage_tab_content">{!! UcfirstCyr::get(trans('validation.labels.product.product_usage_tab_content')) !!}:</label>
                    <textarea type="text" class="form-control" id="product_usage_tab_content" name="product_usage_tab_content" placeholder='{!! trans('validation.labels.product.product_usage_tab_content') !!}'>{!! $product->product_usage_tab_content !!}</textarea>
                </div>

                <p class="w-100"><button type="submit" class="btn btn-success">Сохранить изменения</button></p>

                {!! csrf_field() !!}
            </form>
        </section>
    </main>
@stop

@section('js')
    <script type="text/javascript">
        $(document).ready(function () {
            $('#regular_price, #discount').on('input propertychange', function(e){
                let valueChanged = false;

                if (e.type=='propertychange') {
                    valueChanged = e.originalEvent.propertyName=='value';
                } else {
                    valueChanged = true;
                }
                if (valueChanged) {
                    if($('#discount').val() > 0){
                        let sale_price = ($('#regular_price').val() * $('#discount').val()) / 100;

                        $('input[name="sale_price"]').val($('#regular_price').val() - sale_price.toFixed(0));
                    } else {
                        $('input[name="sale_price"]').val(0);
                    }
                }
            });

            $('.delete-product-category').on('click', function(e){
                e.preventDefault();
                if(confirm('Вы действительно хотите удалить категорию у товара?')){
                    let product_id = $(this).attr('productId');
                    let category_id = $(this).attr('catId');

                    $.ajax({
                        type: "DELETE",
                        url: "{!! route('admin.products.productcategory.delete') !!}",
                        data: {
                            _token:"{{csrf_token()}}",
                            category_id: category_id,
                            product_id: product_id,
                        },
                        success: function(data){
                            if(data){
                                alert("Категория товара удалена.");
                                location.reload();
                            } else {
                                alertify.error("При удалении произошла ошибка. Попробуйте позже.");
                            }
                        },
                        error: function () {
                            alertify.error("При удалении произошла ошибка. Попробуйте позже.");
                        }
                    });
                } else {
                    alertify.error("Действие отменено пользователем.");
                }
            });
        });
    </script>
@stop