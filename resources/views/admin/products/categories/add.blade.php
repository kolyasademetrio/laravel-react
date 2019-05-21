@extends('layouts.admin');

@section('content');
<main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h1>Dashboard</h1>
    <section>
        <p>Введите имя категории:</p>
        <p><input type="text" name="category_name" class="form-control"></p>
        <p>Введите slug категории:</p>
        <p><input type="text" name="category_slug" class="form-control"></p>
        <p>Показывать на главной странице:</p>
        <p><input type="checkbox" name="show_on_homepage" class="form-control"></p>
        <p><button type="submit" class="btn btn-success">Сохранить изменения</button></p>
    </section>
</main>
@stop;