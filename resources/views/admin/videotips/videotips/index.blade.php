@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>Список товаров</h2>
        <div>Всего товаров: {{ $videotips ? count($videotips) : 0 }}</div>
        <section>
            <div class="card-block">
                <a href="{!! route('admin.videotips.add') !!}" class="btn btn-success">{!! trans('buttons.videotips.add') !!}</a>
            </div>
            <table class="table table-bordered">
                <tr>
                    <th>#</th>
                    <th>Действия</th>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Slug</th>
                    <th>Видео</th>
                    <th>Изображение</th>
                    <th>Показывать на главной</th>
                    <th>Дата добавления</th>
                    <th>Действия</th>
                </tr>

                @foreach($videotips as $key=>$videotip)
                    <tr>
                        <td>{{ ++$key }}</td>
                        <td>
                            <a href="{!! route('admin.videotips.edit', ['id' => $videotip->id]) !!}">Редактировать</a> ||
                            <a href="" class="delete_videotip" rel="{{$videotip->id}}">Удалить</a>
                        </td>
                        <td>{{ $videotip->id }}</td>
                        <td>{{ $videotip->title }}</td>
                        <td>{{ $videotip->slug }}</td>
                        <td>{!! $videotip->video !!}</td>
                        <td>
                            @if($videotip->image)
                                <img src="/imagecache/small-120/{{ $videotip->image }}" alt="" style="width: 100px; height: auto;">
                            @endif
                        </td>
                        <td>{!! $videotip->show_on_homepage ? '<input type="checkbox" checked disabled>' : '<input type="checkbox" disabled>' !!}</td>
                        <td>{{$videotip->created_at->format('d-m-Y H:i')}}</td>
                        <td>
                            <a href="{!! route('admin.videotips.edit', ['id' => $videotip->id]) !!}">Редактировать</a> ||
                            <a href="" class="delete_videotip" rel="{{$videotip->id}}">Удалить</a>
                        </td>
                    </tr>
                @endforeach

            </table>
            <div class="card-block">
                <a href="{!! route('admin.videotips.add') !!}" class="btn btn-success">{!! trans('buttons.videotips.add') !!}</a>
            </div>
        </section>
    </main>
@stop

@section('js')
    <script>
        $(function(){
            $('.delete_videotip').on('click', function(e){
                e.preventDefault();
                if(confirm('Вы действительно хотите удалить этот видеосовет?')){
                    var id = $(this).attr('rel');
                    $.ajax({
                        type: "DELETE",
                        url: "{!! route('admin.videotips.delete') !!}",
                        data: {
                            _token:"{{csrf_token()}}",
                            id: id,
                        },
                        success: function(){
                            alert("Видеосовет удален.");
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