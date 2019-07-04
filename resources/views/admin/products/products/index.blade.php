@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>Список товаров</h2>
        <div>Всего товаров: {{ $products ? count($products) : 0 }}</div>
        <section>
            <div class="card-block">
                <a href="{!! route('admin.products.add') !!}" class="btn btn-success">Добавить товар</a>
            </div>
            <table class="table table-bordered">
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Slug</th>
                    <th>Краткое описание</th>
                    <th>Контент</th>
                    <th>Короткий заголовок</th>
                    <th>Короткий текст</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Скидка,%</th>
                    <th>Валюта</th>
                    <th>Изображение</th>
                    <th>Показывать<br> в рекомендуемых</th>
                    <th><div style="width:400px;">Контент вкладки<br> "Описание"</div></th>
                    <th><div style="width:400px;">Контент вкладки<br> "Ингридиенты"</div></th>
                    <th><div style="width:400px;">Контент вкладки<br> "Использование"</div></th>
                    <th>Фоновое изображение<br> вкладок</th>
                    <th>Дата добавления</th>
                    <th>Действия</th>
                </tr>

                @foreach($products as $key=>$product)
                    <tr>
                        <td>{{ ++$key }}</td>
                        <td>{{ $product->id }}</td>
                        <td>{{ $product->title }}</td>
                        <td>{{ $product->slug }}</td>
                        <td>{!! $product->excerpt !!}</td>
                        <td>{!! $product->content !!}</td>
                        <td>{!! $product->descrtitle !!}</td>
                        <td>{!! $product->descrtext !!}</td>
                        <td>{!! $product->descr !!}</td>
                        <td>{{ $product->regular_price }}</td>
                        <td>{{ $product->discount }}</td>
                        <td>{{ $product->currency }}</td>
                        <td>
                        @if($product->image)
                            <img src="{{ $product->image }}" alt="" style="width: 100px; height: auto;">
                        @endif
                        </td>
                        <td>{!! $product->is_reccomended ? '<input type="checkbox" checked disabled>' : '<input type="checkbox" disabled>' !!}</td>
                        <td style="width:400px;">{!! $product->product_description_tab_content !!}</td>
                        <td>{!! $product->product_ingredients_tab_content !!}</td>
                        <td>{!! $product->product_usage_tab_content !!}</td>
                        <td>
                        @if($product->tab_bg)
                            <img src="{{ $product->tab_bg }}" alt="" style="width: 100px; height: auto;">
                        @endif
                        </td>
                        <td>{{$product->created_at->format('d-m-Y H:i')}}</td>
                        <td>
                            <a href="{!! route('admin.products.edit', ['id' => $product->id]) !!}">Редактировать</a> ||
                            <a href="" class="delete_product" rel="{{$product->id}}">Удалить</a>
                        </td>
                    </tr>
                @endforeach

            </table>
        </section>
    </main>
@stop

@section('js')
    <script>
        $(function(){
            $('.delete_product').on('click', function(e){
                e.preventDefault();
                if(confirm('Вы действительно хотите удалить этот товар?')){
                    var id = $(this).attr('rel');
                    $.ajax({
                        type: "DELETE",
                        url: "{!! route('admin.products.delete') !!}",
                        data: {
                            _token:"{{csrf_token()}}",
                            id: id,
                        },
                        success: function(){
                            alert("Товар удален.");
                            location.reload();
                        },
                    });
                } else {
                    alertify.error("Действие отменено пользователем.");
                }
            });
        });
    </script>
@stop