@extends('layouts.admin');

@section('content');
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
                <th>Показывать на главной</th>
                <th>Дата добавления</th>
                <th>Действия</th>
            </tr>

            @foreach($categories as $category)
            <tr>
                <td>{{$category->category_name}}</td>
                <td>{{$category->category_slug}}</td>
                <td>{{$category->category_filter_by}}</td>
                <td>{{$category->show_on_homepage}}</td>
                <td>{{$category->created_at->format('d-m-Y H:i')}}</td>
                <td><a href="{{--{!! route('admin.products.categories.edit') !!}--}}">Редактировать</a> || <a href="{!! route('admin.products.categories.delete') !!}">Удалить</a></td>
            </tr>
            @endforeach

        </table>
    </section>
</main>
@stop;