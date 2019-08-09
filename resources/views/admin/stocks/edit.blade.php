@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('stocks.pages.edit_page_title') !!}</h2>
        <section>
            <form method="post" name="add_videotip_form" action="" class="edit_stock_form row-flex" enctype="multipart/form-data">
                <input type="hidden" name="stockid" value="{{ $stock->id }}">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::trans('stocks.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('stocks.form.title') !!}" value="{!! $stock->title !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::trans('stocks.form.slug') !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('stocks.form.slug') !!}" value="{!! $stock->slug !!}" required>
                </div>

                <div class="form-group w-49">
                    <label for="excerpt">{!! UcfirstCyr::trans('stocks.form.excerpt') !!}:</label>
                    <textarea type="text" class="form-control" id="excerpt" name="excerpt" placeholder='{!! UcfirstCyr::trans('stocks.form.excerpt') !!}'>{!! $stock->excerpt !!}</textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="content">{!! UcfirstCyr::trans('stocks.form.content') !!}:</label>
                    <textarea type="text" class="form-control" id="content" name="content" placeholder='{!! UcfirstCyr::trans('stocks.form.content') !!}'>{!! $stock->content !!}</textarea>
                </div>

                <div class="container-field-hidden row-flex w-100 last">
                    <div class="form-group w-49">
                        <label for="attachment">{!! UcfirstCyr::trans('stocks.form.attachment') !!}:</label>
                        <input type="text" class="form-control hidden-field-control" id="attachment" name="attachment" placeholder="{!! trans('stocks.form.attachment') !!}" value="{!! $video->attachment !!}">
                    </div>
                    <div class="form-group w-49 last{{ optional($video)->attachment ? '' : ' field-hidden' }}">
                        <label for="thumbnail">{!! UcfirstCyr::trans('stocks.form.thumbnail') !!}:</label>
                        <input type="file" class="form-control" id="thumbnail" name="thumbnail" placeholder="{!! trans('stocks.form.thumbnail') !!}" value="{!! $video->thumbnail !!}">
                        {{-- if item exist place it to value to remove it from disk(not database) when old value changed --}}
                        {{-- $fieldNameExist = $fieldName.'_exists'; --}}
                        <input type="hidden" name="thumbnail_exists" value="{{ optional($video)->thumbnail }}">
                        <input type="hidden" name="x1" value="" />
                        <input type="hidden" name="y1" value="" />
                        <input type="hidden" name="w" value="" />
                        <input type="hidden" name="h" value="" />

                        @if(optional($video)->thumbnail)
                            <img src="/imagecache/normal/{{ optional($video)->thumbnail }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50">
                            <a href="" attachmentpreview="{{ optional($video)->id }}" imagename="{{ optional($video)->thumbnail }}" stockid="{{ $stock->id }}" class="badge badge-danger delete-stock-image">×</a>
                        @else
                            <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                        @endif
                    </div>
                </div>

                <div class="form-group form-check w-100 last">
                    <input type="checkbox" class="form-check-input" id="use_as_featured" name="use_as_featured">
                    <label class="form-check-label" for="use_as_featured">{!! UcfirstCyr::trans('stocks.form.use_as_featured') !!}</label>
                </div>

                <div class="form-group w-100 last">
                    <label for="image">{!! UcfirstCyr::trans('stocks.form.attachment') !!}:</label>
                    <input type="file" class="form-control" id="attachment" name="attachment[]" placeholder="{!! trans('stocks.form.attachment') !!}" value="" multiple>
                    <input type="hidden" name="x1" value="" />
                    <input type="hidden" name="y1" value="" />
                    <input type="hidden" name="w" value="" />
                    <input type="hidden" name="h" value="" />

                    <div class="attachments-wrapper row-flex row-flex-4">
                        @if($attachments)
                            @foreach($attachments as $key=>$attachment)
                                @if($attachment->type == 'image')
                                    <div class="w-23-5 mr-2-p exists">
                                        <img src="/imagecache/normal/{{ $attachment->thumbnail }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-90">
                                        <a href="" attachmentid="{{ $attachment->id }}" imagename="{{ $attachment->thumbnail }}" stockid="{{ $stock->id }}" class="badge badge-danger delete-stock-image">×</a>
                                    </div>
                                @endif
                            @endforeach
                        @endif
                    </div>
                </div>

                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>

                {!! csrf_field() !!}
            </form>
        </section>
    </main>
@stop

@section('js')
    <script type="text/javascript">
        $(document).ready(function () {
            // Videotip image deleting
            $('.delete-stock-image').on('click', function(e){
                e.preventDefault();
                if(confirm("{!! trans('messages.images.confirmRemoving') !!}")){
                    let data = {_token:"{{ csrf_token() }}"},
                        route = '';

                    $(this).each(function() {
                        $.each(this.attributes, function() {
                            // this.attributes is not a plain object, but an array
                            // of attribute nodes, which contain both the name and value
                            if(this.specified && this.name !== 'href' && this.name !== 'class') {
                                data[this.name] = this.value;
                            }
                        });
                    });

                    if(data.attachmentid){
                        route = "{!! route('admin.stocks.stockattachment.delete') !!}";
                    } else if(data.attachmentpreview){
                        route = "{!! route('admin.stocks.stockattachmentpreview.delete') !!}";
                    }

                    console.log( 'data', data );
                    console.log( 'route', route );

                    if(route !== ''){
                        $.ajax({
                            type: "DELETE",
                            url: route,
                            data: data,
                            success: function(result){
                                if(result){
                                    alert("{!! trans('messages.images.successDeleting') !!}");
                                    location.reload();
                                } else {
                                    alertify.error("{!! trans('messages.images.failedDeleting') !!}");
                                }
                            },
                            error: function(data){
                                alertify.error("{!! trans('messages.images.failedDeleting') !!}");
                            }
                        });
                    }
                } else {
                    alertify.error("{!! trans('commons.actionCanceledByUser') !!}");
                }
            });
        });
    </script>

    {!! JsValidator::formRequest('App\Http\Requests\StocksRequest'); !!}
@stop