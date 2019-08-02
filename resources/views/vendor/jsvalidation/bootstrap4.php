<?php //dd($validator); ?>

<script>
    jQuery(document).ready(function(){
        $("<?= $validator['selector']; ?>").each(function(index) {
            $(this).validate({
                errorElement: 'article',
                errorClass: 'alertify-log alertify-log-error alertify-log-show',
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length ||
                        element.prop('type') === 'checkbox' ||
                        element.prop('type') === 'radio')
                    {
                        error.insertAfter(element.parent());
                        // else just place the validation message immediately after the input
                    } else {
                        error.insertAfter(element);
                    }
                },

                showErrors: function(errorMap, errorList){
                    console.log( 'errorList', errorList.length );
                    console.log( 'errorMap', Object.keys(errorMap).length );

                    if ( errorList.length ) {
                        if ( $('.alertify-logs').length  ) {
                            $('.alertify-logs').remove();
                        }

                        if ( !$('.alertify-logs').length ) {
                            const errorsWrapper = $('<div class="alertify-logs dnk-errors" id="alertify-logs"></div>').appendTo('body');

                            errorList.forEach(function(el, index){
                                $(el.element).parent().removeClass('is-valid').addClass('has-danger');

                                let $elem = $('<article class="alertify-log alertify-log-error">' + el.message + '</article>').appendTo(errorsWrapper);
                                setTimeout(function(){
                                    $elem.addClass('alertify-log-show');
                                }, 50);
                            });
                        }
                    }
                },
                onkeyup: false,

                highlight: function (element) {
                    $(element).closest('.form-control').removeClass('is-valid').addClass('is-invalid'); // add the Bootstrap error class to the control group
                },

                <?php if (isset($validator['ignore']) && is_string($validator['ignore'])): ?>

                ignore: "<?= $validator['ignore']; ?>",
                <?php endif; ?>

                
                unhighlight: function(element) {
                    $(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
                },
                
                success: function (element) {
                    $(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid'); // remove the Boostrap error class from the control group
                },

                focusInvalid: false, // do not focus the last invalid input
                <?php if (Config::get('jsvalidation.focus_on_error')): ?>
                invalidHandler: function (form, validator) {

                    if (!validator.numberOfInvalids())
                        return;

                    $('html, body').animate({
                        scrollTop: $(validator.errorList[0].element).offset().top
                    }, <?= Config::get('jsvalidation.duration_animate') ?>);
                    $(validator.errorList[0].element).focus();

                },
                <?php endif; ?>

                rules: <?= json_encode($validator['rules']); ?>
            });
        });
    });

    $(document).on('click', '.dnk-errors .alertify-log', function(){
        var $that = $(this).removeClass('alertify-log-show').addClass('alertify-log-hide');
        setTimeout(function(){
            $that.remove();
        }, 500);
    });
</script>
