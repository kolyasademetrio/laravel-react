@extends('layouts.admin')

@section('content')
<main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h1>Список категорий</h1>
    <section>
        <div class="card-block">
            <a href="{!! route('admin.products.categories.add') !!}" class="btn btn-success">Добавить категорию</a>
        </div>
        <table class="table table-bordered">
            <tr>
                <th>Название</th>
                <th>Slug</th>
                <th>Фильтровать по</th>
                <th>Показывать<br/> на главной</th>
                <th>Дата добавления</th>
                <th>Действия</th>
            </tr>

            @foreach($categories as $category)
            <tr>
                <td>{{$category->category_name}}</td>
                <td>{{$category->category_slug}}</td>
                <td>{{$category->category_filter_by}}</td>
                <td>{!!$category->show_on_homepage ? '<input type="checkbox" checked disabled>' : '<input type="checkbox" disabled>'!!}</td>
                <td>{{$category->created_at/*->format('d-m-Y H:i')*/}}</td>
                <td>
                    <a href="{!! route('admin.products.categories.edit', ['id' => $category->category_id]) !!}">Редактировать</a> ||
                    <a href="" class="delete_category" rel="{{$category->category_id}}">Удалить</a>
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
            $('.delete_category').on('click', function(e){
                e.preventDefault();
                if(confirm('Вы действительно хотите удалить эту категорию?')){
                    var id = $(this).attr('rel');
                    $.ajax({
                        type: "DELETE",
                        url: "{!! route('admin.products.categories.delete') !!}",
                        data: {
                            _token:"{{csrf_token()}}",
                            id: id,
                        },
                        success: function(){
                            alert("Категория удалена.");
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