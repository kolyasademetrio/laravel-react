@extends('layouts.admin')


@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h1>Редактировать товар</h1>
        <section>
            <form method="post" action="" class="add_product_form" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="title">Введите название товара:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="Введите название товара" value="{!! $product->title !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">Введите slug товара:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="Введите slug товара" value="{!! $product->slug !!}" required>
                </div>

                <div class="form-group last">
                    <label for="excerpt">Введите краткое описание товара:</label>
                    <input type="text" class="form-control" id="excerpt" name="excerpt" placeholder="Введите краткое описание товара" value="{!! $product->excerpt !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtitle">Введите короткий заголовок товара:</label>
                    <input type="text" class="form-control" id="descrtitle" name="descrtitle" placeholder="Введите короткий заголовок товара" value="{!! $product->descrtitle !!}" required>
                </div>

                <div class="form-group">
                    <label for="descrtext">Введите короткий текст товара:</label>
                    <input type="text" class="form-control" id="descrtext" name="descrtext" placeholder="Введите короткий текст товара" value="{!! $product->descrtext !!}" required>
                </div>

                <div class="form-group last">
                    <label for="product_category">Выберите категорию товара</label>
                    <select name="product_category" id="product_category" class="form-control">
                        <option value="0" selected>Добавьте категорию товара</option>
                        @foreach($categories as $category)
                            @if(!in_array($category->category_id, $productCategories))
                                <option value="{{ $category->category_id }}">{{ $category->category_name }}</option>
                            @endif
                        @endforeach
                    </select>
                </div>

                <div class="list-group mb-3" style="width: 100%;">
                    <div class="list-group-item active">Список всех категорий товара</div>
                    @php $productHasCats = 0; @endphp
                    @foreach($categories as $cat)
                        @if(in_array($cat->category_id, $productCategories))
                            @php $productHasCats++ @endphp
                            <div class="list-group-item">
                                <div class="container">
                                    <div class="row justify-content-between">
                                        <div class="col">{{ $cat->category_name }}</div>
                                        <div class="col-auto">
                                            <a href="" catId="{{ $cat->category_id }}" productId="{{ $product->id }}" class="badge badge-info delete-product-category">&times;</a>
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
                                    <div class="col text-center">У товара нет категорий</div>
                                </div>
                            </div>
                        </div>
                    @endif
                </div>

                <div class="form-group textarea">
                    <label for="descr">Введите описание товара:</label>
                    <textarea class="form-control" id="descr" name="descr" placeholder="Введите описание товара" required>{!! $product->descr !!}</textarea>
                </div>

                <div class="form-group textarea last">
                    <label for="content">Введите контент товара:</label>
                    <textarea class="form-control" id="content" name="content" placeholder="Введите контент товара" required>{!! $product->content !!}</textarea>
                </div>

                <div class="form-group price">
                    <label for="regular_price">Введите цену:</label>
                    <input type="number" min="0" step="1" class="form-control" id="regular_price" name="regular_price" placeholder="Введите цену" value="{!! $product->regular_price !!}" required>
                </div>

                <div class="form-group price">
                    <label for="discount">Введите скидку, %:</label>
                    <input type="number" min="0" max="100" step="0.1" class="form-control" id="discount" name="discount" placeholder="Введите скидку" value="{!! $product->discount !!}" required>
                </div>

                <div class="form-group price">
                    <label for="sale_price">Цена со скидкой:</label>
                    <input type="text" class="form-control" id="sale_price" name="sale_price" placeholder="Цена со скидкой" value="{!! $product->sale_price ? $product->sale_price : 0 !!}" readonly>
                </div>

                <div class="form-group price last">
                    <label for="currency">Валюта:</label>
                    <input type="text" class="form-control" id="currency" name="currency" placeholder="Валюта" value="{!! $product->currency !!}" required>
                </div>

                <div class="form-group image">
                    <label for="image">Изображение:</label>
                    <input type="file" class="form-control" id="image" name="image" placeholder="Изображение" value="{!! $product->image !!}">
                </div>

                <div class="form-group image last">
                    <label for="tab_bg">Фоновое изображение вкладок:</label>
                    <input type="file" class="form-control" id="tab_bg" name="tab_bg" placeholder="Фоновое изображение вкладок" value="{!! $product->tab_bg !!}">
                </div>


                <div class="form-group">
                    <label for="product_description_tab_content">Контент вкладки "Описание":</label>
                    <textarea type="text" class="form-control" id="product_description_tab_content" name="product_description_tab_content" placeholder='Контент вкладки "Описание"'>{!! $product->product_description_tab_content !!}</textarea>
                </div>

                <div class="form-group">
                    <label for="product_ingredients_tab_content">Контент вкладки "Ингридиенты":</label>
                    <textarea type="text" class="form-control" id="product_ingredients_tab_content" name="product_ingredients_tab_content" placeholder='Контент вкладки "Ингридиенты"'>{!! $product->product_ingredients_tab_content !!}</textarea>
                </div>

                <div class="form-group last">
                    <label for="product_usage_tab_content">Контент вкладки "Использование":</label>
                    <textarea type="text" class="form-control" id="product_usage_tab_content" name="product_usage_tab_content" placeholder='Контент вкладки "Использование"'>{!! $product->product_usage_tab_content !!}</textarea>
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="is_reccomended" name="is_reccomended" {{ $product->is_reccomended == 1 ? 'checked' : '' }}>
                    <label class="form-check-label" for="is_reccomended">Показывать в рекомендуемых</label>
                </div>

                <p><button type="submit" class="btn btn-success">Сохранить изменения</button></p>

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