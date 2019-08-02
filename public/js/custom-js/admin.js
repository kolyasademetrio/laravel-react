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