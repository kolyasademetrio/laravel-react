@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>Список акцию</h2>
        <div>Всего акций: {{ $stocks ? count($stocks) : 0 }}</div>
        <section>
            <div class="card-block">
                <a href="{!! route('admin.stocks.add') !!}" class="btn btn-success">{!! trans('buttons.stocks.add') !!}</a>
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

                @foreach($stocks as $key=>$stock)
                    <tr>
                        <td>{{ ++$key }}</td>
                        <td>
                            <a href="{!! route('admin.stocks.edit', ['id' => $stock->id]) !!}">Редактировать</a> ||
                            <a href="" class="delete_stock" rel="{{$stock->id}}">Удалить</a>
                        </td>
                        <td>{{ $stock->id }}</td>
                        <td>{!! $stock->title !!}</td>
                        <td>{{ $stock->slug }}</td>
                        <td>{!! $stock->excerpt !!}</td>
                        <td>{!! $stock->content !!}</td>
                        <td>
                            @foreach($stockAttachments as $key=>$attachment)
                                @if(($attachment->stock_id == $stock->id) && ($attachment->use_as_featured == 1) && ($attachment->type == 'video'))
                                    {{ $attachment->attachment }}
                                @endif
                            @endforeach
                        </td>
                        <td>
                            @foreach($stockAttachments as $key=>$attachment)
                                @if(($attachment->stock_id == $stock->id) && ($attachment->use_as_featured == 1))
                                    <img src="/imagecache/small-120/{{ $attachment->thumbnail }}" alt="" style="width: 100px; height: auto;">
                                @endif
                            @endforeach
                        </td>
                        <td>{{$stock->created_at->format('d-m-Y H:i')}}</td>
                        <td>
                            <a href="{!! route('admin.stocks.edit', ['id' => $stock->id]) !!}">Редактировать</a> ||
                            <a href="" class="delete_stock" rel="{{$stock->id}}">Удалить</a>
                        </td>
                    </tr>
                @endforeach

            </table>
            <div class="card-block">
                <a href="{!! route('admin.stocks.add') !!}" class="btn btn-success">{!! trans('buttons.stocks.add') !!}</a>
            </div>
        </section>
    </main>
@stop

@section('js')
    <script>
        $(function(){
            $('.delete_stock').on('click', function(e){
                e.preventDefault();
                if(confirm('Вы действительно хотите удалить эту акцию?')){
                    var id = $(this).attr('rel');
                    $.ajax({
                        type: "DELETE",
                        url: "{!! route('admin.stocks.delete') !!}",
                        data: {
                            _token:"{{csrf_token()}}",
                            id: id,
                        },
                        success: function(){
                            alert("Акция удалена.");
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