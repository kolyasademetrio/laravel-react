@extends('layouts.admin')

@section('content')
<main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h1>Редактировать категорию</h1>
    <section>
        <form method="post" action="">
            {!! csrf_field() !!}
            <div class="form-group">
                <label for="category_name">Введите имя категории:</label>
                <input type="text" class="form-control" id="category_name" name="category_name" placeholder="Введите имя категории" value="{{$category->category_name}}" required>
            </div>

            <div class="form-group">
                <label for="category_slug">Введите slug категории:</label>
                <input type="text" class="form-control" id="category_slug" name="category_slug" placeholder="Введите slug категории" required value="{{$category->category_slug}}">
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="show_on_homepage" name="show_on_homepage" {{$category->show_on_homepage ? 'checked' : ''}}>
                <label class="form-check-label" for="show_on_homepage">Показывать на главной странице:</label>
            </div>

            <p><button type="submit" class="btn btn-success">Сохранить изменения</button></p>
        </form>
    </section>
</main>
@stop

@section('js')
    {!! JsValidator::formRequest('App\Http\Requests\ProductsCategoriesRequest') !!}
@stop