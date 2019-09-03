@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>Список новостей</h2>
        <div>Всего новостей: {{ $doyouknows ? count($doyouknows) : 0 }}</div>
        <section>
            <div class="card-block">
                <a href="{!! route('admin.doyouknows.add') !!}" class="btn btn-success">{!! trans('buttons.doyouknows.add') !!}</a>
            </div>
            <table class="table table-bordered">
                <tr>
                    <th>#</th>
                    <th>Действия</th>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Slug</th>
                    <th>Описание</th>
                    <th>Контент</th>
                    <th>Видео</th>
                    <th>Изображение</th>
                    <th>Дата добавления</th>
                    <th>Действия</th>
                </tr>

                @foreach($doyouknows as $key=>$doyouknow)
                    <tr>
                        <td>{{ ++$key }}</td>
                        <td>
                            <a href="{!! route('admin.doyouknows.edit', ['id' => $doyouknow->id]) !!}">Редактировать</a> ||
                            <a href="" class="delete_stock" rel="{{$doyouknow->id}}">Удалить</a>
                        </td>
                        <td>{{ $doyouknow->id }}</td>
                        <td>{!! $doyouknow->title !!}</td>
                        <td>{{ $doyouknow->slug }}</td>
                        <td>{!! $doyouknow->excerpt !!}</td>
                        <td>{!! $doyouknow->content !!}</td>
                        <td>
                            @foreach($doyouknowsAttachments as $key=>$attachment)
                                @if(($attachment->doyouknow_id == $doyouknow->id) && ($attachment->use_as_featured == 1) && ($attachment->type == 'video'))
                                    {{ $attachment->attachment }}
                                @endif
                            @endforeach
                        </td>
                        <td>
                            @foreach($doyouknowsAttachments as $key=>$attachment)
                                @if(($attachment->doyouknow_id == $doyouknow->id) && ($attachment->use_as_featured == 1))
                                    <img src="/imagecache/small-120/{{ $attachment->thumbnail }}" alt="" style="width: 100px; height: auto;">
                                @endif
                            @endforeach
                        </td>
                        <td>{{$doyouknow->created_at->format('d-m-Y H:i')}}</td>
                        <td>
                            <a href="{!! route('admin.doyouknows.edit', ['id' => $doyouknow->id]) !!}">Редактировать</a> ||
                            <a href="" class="delete_doyouknow" rel="{{$doyouknow->id}}">Удалить</a>
                        </td>
                    </tr>
                @endforeach

            </table>
            <div class="card-block">
                <a href="{!! route('admin.doyouknows.add') !!}" class="btn btn-success">{!! trans('buttons.doyouknows.add') !!}</a>
            </div>
        </section>
    </main>
@stop

@section('js')
    <script>
        $(function(){
            $('.delete_doyouknow').on('click', function(e){
                e.preventDefault();
                if(confirm('Вы действительно хотите удалить эту новость?')){
                    var id = $(this).attr('rel');
                    $.ajax({
                        type: "DELETE",
                        url: "{!! route('admin.doyouknows.delete') !!}",
                        data: {
                            _token:"{{csrf_token()}}",
                            id: id,
                        },
                        success: function(){
                            alert("Новость удалена.");
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