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
                <label for="content">Введите контент товара:</label>
                <input type="text" class="form-control" id="content" name="content" placeholder="Введите контент товара" required>
            </div>

            <div class="form-group">
                <label for="descrtitle">Введите короткий заголовок товара:</label>
                <input type="text" class="form-control" id="descrtitle" name="descrtitle" placeholder="Введите короткий заголовок товара" required>
            </div>

            <div class="form-group last">
                <label for="descrtext">Введите короткий текст товара:</label>
                <input type="text" class="form-control" id="descrtext" name="descrtext" placeholder="Введите короткий текст товара" required>
            </div>

            <div class="form-group">
                <label for="descr">Введите описание товара:</label>
                <input type="text" class="form-control" id="descr" name="descr" placeholder="Введите описание товара" required>
            </div>

            <div class="form-group">
                <label for="regular_price">Введите цену:</label>
                <input type="text" class="form-control" id="regular_price" name="regular_price" placeholder="Введите цену" required>
            </div>

            <div class="form-group last">
                <label for="discount">Введите скидку, %:</label>
                <input type="text" class="form-control" id="discount" name="discount" placeholder="Введите скидку" required>
            </div>

            <div class="form-group">
                <label for="sale_price">Цена со скидкой:</label>
                <input type="text" class="form-control" id="sale_price" name="sale_price" placeholder="Цена со скидкой" value="0" disabled>
            </div>

            <div class="form-group last">
                <label for="currency">Валюта:</label>
                <input type="text" class="form-control" id="currency" name="currency" placeholder="Валюта" required>
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
            $('#regular_price').on('input propertychange', function(e){
                var valueChanged = false;

                if (e.type=='propertychange') {
                    valueChanged = e.originalEvent.propertyName=='value';
                } else {
                    valueChanged = true;
                }
                if (valueChanged) {
                    if($('#discount').val() > 0){
                        var sale_price = ($('#regular_price').val() * $('#discount').val()) / 100;

                        $('#sale_price').val(sale_price.toFixed(0));


                    }
                }
            });
        });
    </script>
@stop