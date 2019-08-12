@extends('layouts.admin')

@section('content')
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h2>{!! trans('videotips.pages.edit_page_title') !!}  <i>{!! $videotip->title.'( id-'. $videotip->id .' )' !!}</i></h2>
        <section>
            <form method="post" name="add_videotip_form" action="" class="add_videotip_form row-flex" enctype="multipart/form-data">
                <p class="w-100"><button type="submit" class="btn btn-success">{!! UcfirstCyr::trans('buttons.save_changes') !!}</button></p>
                <div class="form-group">
                    <label for="title">{!! UcfirstCyr::trans('videotips.form.title') !!}:</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="{!! trans('videotips.form.title') !!}" value="{!! $videotip->title !!}" required>
                </div>

                <div class="form-group">
                    <label for="slug">{!! UcfirstCyr::trans('videotips.form.slug') !!}:</label>
                    <input type="text" class="form-control" id="slug" name="slug" placeholder="{!! trans('videotips.form.slug') !!}" value="{!! $videotip->slug !!}" required>
                </div>

                <div class="form-group form-check w-100 last">
                    <input type="checkbox" class="form-check-input" id="show_on_homepage" name="show_on_homepage" {{ $videotip->show_on_homepage == 1 ? 'checked' : '' }}>
                    <label class="form-check-label" for="show_on_homepage">{!! UcfirstCyr::trans('videotips.form.show_on_homepage') !!}</label>
                </div>
                <div class="container-field-hidden row-flex w-100 last">
                    <div class="form-group w-49">
                        <label for="video">{!! UcfirstCyr::trans('videotips.form.video') !!}:</label>
                        <input type="text" class="form-control hidden-field-control" id="video" name="video" placeholder="{!! trans('videotips.form.video') !!}" value="{!! $videotip->video !!}">
                    </div>
                    <div class="form-group w-49 last{{ optional($videotip)->video || optional($videotip)->image ? '' : ' field-hidden' }}">
                        <label for="image">{!! UcfirstCyr::trans('videotips.form.image') !!}:</label>
                        <input type="file" class="form-control" id="image" name="image" placeholder="{!! trans('videotips.form.image') !!}" value="{!! $videotip->image !!}">
                        <input type="hidden" name="x1" value="" />
                        <input type="hidden" name="y1" value="" />
                        <input type="hidden" name="w" value="" />
                        <input type="hidden" name="h" value="" />

                        @if(optional($videotip)->image)
                            <img src="/imagecache/normal/{{ optional($videotip)->image }}" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50">
                            <a href="" imagename="{{ optional($videotip)->image }}" fieldname="image" videotipid="{{ $videotip->id }}" class="badge badge-danger delete-videotip-image">×</a>
                        @else
                            <img src="" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-50" style="display: none;">
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
            $('.delete-videotip-image').on('click', function(e){
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

                    if(data.fieldname){
                        route = "{!! route('admin.videotips.videotipfileld.delete') !!}";
                    }

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
                            error: function(){
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

    {!! JsValidator::formRequest('App\Http\Requests\VideotipsRequest') !!}
@stop