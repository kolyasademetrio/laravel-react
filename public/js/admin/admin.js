// return translated string on front like on backend
// it uses app/Providers/TranslationServiceProvider.php
function trans_choice(key, count = 1, replace = {}) {
    let translation = key.split('.').reduce((t, i) => t[i] || null, window.translations).split('|');

    translation = count > 1 ? translation[1] : translation[0];

    for (var placeholder in replace) {
        translation = translation.replace(`:${placeholder}`, replace[placeholder]);
    }

    return translation;
}

jQuery(function($) {
    // Adding preview of the photo/image that added with input[type="file"]
    // both single and multiple/gallery
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

    // showing the hidden field after adding preview image for "attachment_video" field
    // for the product
    $('body').on('change, input', '.hidden-field-control', function(e){
        var $hiddenBox = $(this).parents('.container-field-hidden').find('.field-hidden');
        $hiddenBox.slideDown();

    });

    // imgAreaSelect initialization
    $('.previewimage').imgAreaSelect({
        handles: true,
        onSelectEnd: function (img, selection) {
            $('input[name="x1"]').val(selection.x1);
            $('input[name="y1"]').val(selection.y1);
            $('input[name="w"]').val(selection.width);
            $('input[name="h"]').val(selection.height);
        }
    });

    // calculating and showing the "sale_price" after discount value changed
    $('#regular_price, #discount').on('input propertychange', function(e){
        let valueChanged = false;

        if (e.type=='propertychange') {
            valueChanged = e.originalEvent.propertyName=='value';
        } else {
            valueChanged = true;
        }
        if (valueChanged) {
            if($('#discount').val() > 0){
                let sale_price = ($('#regular_price').val() * $('#discount').val()) / 100;

                $('input[name="sale_price"]').val($('#regular_price').val() - sale_price.toFixed(0));
            } else {
                $('input[name="sale_price"]').val(0);
            }
        }
    });
});