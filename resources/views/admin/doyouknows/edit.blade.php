@extends('admin.index')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('doyouknows.pages.edit_page_title') !!}</h2>
        <section>
            <form method="post" name="add_videotip_form" action="" class="edit_doyouknow_form row-flex" enctype="multipart/form-data">
                <input type="hidden" name="doyouknowid" value="{{ $doyouknow->id }}">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::trans('doyouknows.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('doyouknows.form.title') !!}" value="{!! $doyouknow->title !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::trans('doyouknows.form.slug') !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('doyouknows.form.slug') !!}" value="{!! $doyouknow->slug !!}" required>
                </div>

                <div class="form-group w-49">
                    <label for="excerpt">{!! UcfirstCyr::trans('doyouknows.form.excerpt') !!}:</label>
                    <textarea type="text" class="form-control" id="excerpt" name="excerpt" placeholder='{!! UcfirstCyr::trans('doyouknows.form.excerpt') !!}'>{!! $doyouknow->excerpt !!}</textarea>
                </div>

                <div class="form-group w-49 last">
                    <label for="content">{!! UcfirstCyr::trans('doyouknows.form.content') !!}:</label>
                    <textarea type="text" class="form-control" id="content" name="content" placeholder='{!! UcfirstCyr::trans('doyouknows.form.content') !!}'>{!! $doyouknow->content !!}</textarea>
                </div>

                <div class="container-field-hidden row-flex w-100 last">
                    <div class="form-group w-49">
                        <label for="attachment">{!! UcfirstCyr::trans('doyouknows.form.attachment') !!}:</label>
                        <input type="text" class="form-control hidden-field-control" id="attachment" name="attachment" placeholder="{!! trans('doyouknows.form.attachment') !!}" value="{!! optional($video)->attachment !!}">
                    </div>
                    <div class="form-group w-49 last{{ optional($video)->attachment || optional($video)->thumbnail ? '' : ' field-hidden' }}">
                        <label for="thumbnail">{!! UcfirstCyr::trans('doyouknows.form.thumbnail') !!}:</label>
                        <input type="file" class="form-control" id="thumbnail" name="thumbnail" placeholder="{!! trans('doyouknows.form.thumbnail') !!}" value="{!! optional($video)->thumbnail !!}">
                        {{-- if item exist place it to value to remove it from disk(not database) when old value changed --}}
                        {{-- $fieldNameExist = $fieldName.'_exists'; --}}
                        <input type="hidden" name="thumbnail_exists" value="{{ optional($video)->thumbnail }}">
                        <input type="hidden" name="x1" value="" />
                        <input type="hidden" name="y1" value="" />
                        <input type="hidden" name="w" value="" />
                        <input type="hidden" name="h" value="" />

                        @if(optional($video)->thumbnail)
                            <img src="/imagecache/normal/{{ optional($video)->thumbnail }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50">
                            <a href="" attachmentpreview="{{ optional($video)->id }}" imagename="{{ optional($video)->thumbnail }}" doyouknowid="{{ $doyouknow->id }}" class="badge badge-danger delete-doyouknow-image">×</a>
                        @else
                            <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
                        @endif
                    </div>
                </div>

                <div class="form-group form-check w-100 last">
                    <input type="checkbox" class="form-check-input" id="use_as_featured" name="use_as_featured" {{ optional($video)->use_as_featured ? 'checked' : '' }}>
                    <label class="form-check-label" for="use_as_featured">{!! UcfirstCyr::trans('doyouknows.form.use_as_featured') !!}</label>
                </div>

                <div class="form-group w-100 last">
                    <label for="attachments">{!! UcfirstCyr::trans('commons.addImagesGallery') !!}:</label>
                    <input type="file" class="form-control" id="attachments" name="attachments[]" placeholder="{!! trans('doyouknows.form.attachment') !!}" value="" multiple>
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
                                        <a href="" attachmentid="{{ $attachment->id }}" imagename="{{ $attachment->thumbnail }}" doyouknowid="{{ $doyouknow->id }}" class="badge badge-danger delete-doyouknow-image">×</a>
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
            $('.delete-doyouknow-image').on('click', function(e){
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
                        route = "{!! route('admin.doyouknows.doyouknowattachment.delete') !!}";
                    } else if(data.attachmentpreview){
                        route = "{!! route('admin.doyouknows.doyouknowattachmentpreview.delete') !!}";
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

    {!! JsValidator::formRequest('App\Http\Requests\DoyouknowRequest'); !!}
@stop