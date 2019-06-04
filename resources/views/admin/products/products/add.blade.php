@extends('layouts.admin')

@section('content')
<main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h1>Добавить товар</h1>
    <section>
        <form method="post" action="" class="add_product_form" enctype="multipart/form-data">
            <div class="form-group">
                <label for="title">Введите название товара:</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="Введите название товара" required>
            </div>

            <div class="form-group">
                <label for="slug">Введите slug товара:</label>
                <input type="text" class="form-control" id="slug" name="slug" placeholder="Введите slug товара" required>
            </div>

            <div class="form-group last">
                <label for="excerpt">Введите краткое описание товара:</label>
                <input type="text" class="form-control" id="excerpt" name="excerpt" placeholder="Введите краткое описание товара" required>
            </div>

            <div class="form-group">
                <label for="descrtitle">Введите короткий заголовок товара:</label>
                <input type="text" class="form-control" id="descrtitle" name="descrtitle" placeholder="Введите короткий заголовок товара" required>
            </div>

            <div class="form-group">
                <label for="descrtext">Введите короткий текст товара:</label>
                <input type="text" class="form-control" id="descrtext" name="descrtext" placeholder="Введите короткий текст товара" required>
            </div>

            <div class="form-group last">
                <label for="product_category">Выберите категорию товара</label>
                <select name="product_category" id="product_category" class="form-control">
                    <option value="0">Выберите категорию товара</option>
                    @foreach($categories as $category)
                        <option value="{{ $category->category_id }}">{{ $category->category_name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group textarea">
                <label for="descr">Введите описание товара:</label>
                <textarea class="form-control" id="descr" name="descr" placeholder="Введите описание товара" required></textarea>
            </div>

            <div class="form-group textarea last">
                <label for="content">Введите контент товара:</label>
                <textarea class="form-control" id="content" name="content" placeholder="Введите контент товара" required></textarea>
            </div>

            <div class="form-group price">
                <label for="regular_price">Введите цену:</label>
                <input type="number" min="0" step="1" class="form-control" id="regular_price" name="regular_price" placeholder="Введите цену" required>
            </div>

            <div class="form-group price">
                <label for="discount">Введите скидку, %:</label>
                <input type="number" min="0" max="100" step="0.1" class="form-control" id="discount" name="discount" placeholder="Введите скидку" required>
            </div>

            <div class="form-group price">
                <label for="sale_price">Цена со скидкой:</label>
                <input type="text" class="form-control" id="sale_price" name="sale_price" placeholder="Цена со скидкой" value="0" readonly>
            </div>

            <div class="form-group price last">
                <label for="currency">Валюта:</label>
                {{--<select class="form-control" id="currency" name="currency">
                    @foreach($currencies as $currency)
                        <option value="{{ $currency->id }}" {{ $currency->current ? 'selected' : ''}}>{{ $currency->name }}</option>
                    @endforeach
                </select>--}}
                <input type="text" class="form-control" id="currency" name="currency" value="{{ $currency->name }}" readonly>
            </div>

            <div class="form-group image">
                <label for="image">Изображение:</label>
                <input type="file" class="form-control" id="image" name="image" placeholder="Изображение">
            </div>

            <div class="form-group image last">
                <label for="tab_bg">Фоновое изображение вкладок:</label>
                <input type="file" class="form-control" id="tab_bg" name="tab_bg" placeholder="Фоновое изображение вкладок">
            </div>


            <div class="form-group">
                <label for="product_description_tab_content">Контент вкладки "Описание":</label>
                <textarea type="text" class="form-control" id="product_description_tab_content" name="product_description_tab_content" placeholder='Контент вкладки "Описание"'></textarea>
            </div>

            <div class="form-group">
                <label for="product_ingredients_tab_content">Контент вкладки "Ингридиенты":</label>
                <textarea type="text" class="form-control" id="product_ingredients_tab_content" name="product_ingredients_tab_content" placeholder='Контент вкладки "Ингридиенты"'></textarea>
            </div>

            <div class="form-group last">
                <label for="product_usage_tab_content">Контент вкладки "Использование":</label>
                <textarea type="text" class="form-control" id="product_usage_tab_content" name="product_usage_tab_content" placeholder='Контент вкладки "Использование"'></textarea>
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="is_reccomended" name="is_reccomended">
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
        });
    </script>
@stop