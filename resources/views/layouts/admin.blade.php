<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Админ панель</title>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap-min.css') }}">

    <!-- Alertyfy CSS -->
    <link rel="stylesheet" href="{{ asset('plugins/alertyfy/themes/alertify.core.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/alertyfy/themes/alertify.default.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/alertyfy/themes/alertify.bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/jquery.imgareaselect-0.9.10/css/imgareaselect-default.css') }}">

    <!-- Custom styles for this template -->
    <link href="/css/dashboard.css" rel="stylesheet">
</head>

<body>
<nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/admin">Панель управления</a>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/admin">Главная <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="">Settings</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Help</a>
            </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>

<div class="container-fluid">
    <div class="row">
        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <a class="nav-link {{ active(['admin.products', 'admin.products.*', 'not:admin.products.categories', 'not:admin.products.categories.*']) }}" href="{!! route('admin.products') !!}">Товары</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ active(['admin.products.categories', 'admin.products.categories.*']) }}" href="{!! route('admin.products.categories') !!}">Категории товаров <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Analytics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Export</a>
                </li>
            </ul>

            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="#">Nav item</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nav item again</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">One more nav</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Another nav item</a>
                </li>
            </ul>

            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="#">Nav item again</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">One more nav</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Another nav item</a>
                </li>
            </ul>
        </nav>

        @yield('content')
    </div>
</div>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="{{ asset('js/custom-js/jquery-3.2.1.js') }}"></script>
<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>

<!-- alertify -->
<script src="{{ asset('plugins/alertyfy/lib/alertify.js') }}"></script>

<!-- tinymce -->
<script src="{{ asset('plugins/tinymce/tinymce.min.js') }}"></script>
<script src="{{ asset('js/custom-js/tiny-mce-init-admin.js') }}"></script>

<!-- Laravel Javascript Validation -->
<script type="text/javascript" src="{{ asset('vendor/jsvalidation/js/jsvalidation.js') }}"></script>

<!-- ImgAreaSelect -->
<script type="text/javascript" src="{{ asset('vendor/jquery.imgareaselect-0.9.10/js/jquery.imgareaselect.min.js') }}"></script>
<script>
    jQuery(function($) {
        $("body").on('change', 'input[type="file"]', function(){
            var multiple = $(this).attr('multiple'),
                filesExt  = ['jpeg','jpg','png','gif'];

            if(typeof multiple === typeof undefined && !multiple) {
                var parts = this.files[0].name.split('.');

                if(filesExt.join().search(parts[parts.length - 1]) != -1){
                    let imageReader = new FileReader();

                    var p = $(this).parent().find('.previewimage');
                    imageReader.readAsDataURL(this.files[0]);

                    imageReader.onload = function (oFREvent) {
                        p.attr('src', oFREvent.target.result).fadeIn();
                        p.parent().find('a').remove();
                    };
                }
            } else {
                function setupReader(file, $wrapper) {
                    let name = file.name;
                    let imageReader = new FileReader();

                    imageReader.readAsDataURL(file);
                    imageReader.onload = function(oFREvent) {
                        $wrapper.append('<div class="w-23-5 mr-2-p">' +
                            '<img src="' + oFREvent.target.result + '" alt="" class="previewimage img-fluid img-thumbnail rounded p-2 mt-2 mb-2 w-90">' +
                            '</div>').fadeIn();
                    }
                }

                if(this.files.length){
                    var $exists = $(this).parent().find('.product-attachments-wrapper').find('.exists').detach(),
                        $wrapper = $(this).parent().find('.product-attachments-wrapper').empty();

                    $wrapper.append($exists);

                    for (var i = 0; i < this.files.length; i++) {
                        let parts = this.files[i].name.split('.');
                        if(filesExt.join().search(parts[parts.length - 1]) != -1){
                            setupReader(this.files[i], $wrapper);
                        }
                    }
                }
            }
        });

        $('body').on('change', 'input[name*="attachment_video"]', function(e){
            var $hiddenBox = $(this).parents('.container-field-hidden').find('.field-hidden');
            $hiddenBox.slideDown();

        });

        $('.previewimage').imgAreaSelect({
            handles: true,
            onSelectEnd: function (img, selection) {
                $('input[name="x1"]').val(selection.x1);
                $('input[name="y1"]').val(selection.y1);
                $('input[name="w"]').val(selection.width);
                $('input[name="h"]').val(selection.height);
            }
        });
    });
</script>

@yield('js')

@include('inc.messages')

</body>
</html>
