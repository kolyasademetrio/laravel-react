var editor_config = {
    path_absolute : "{{ URL::to('/') }}/",
    selector : "textarea",
    plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor colorpicker textpattern"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
    relative_urls: false,
    file_browser_callback : function(field_name, url, type, win) {
        var x = window.innerWidth || document.documentElement.clientWidth || document.getElementByTagName('body')[0].clientWidth;
        var y = window.innerHeight|| document.documentElement.clientHeight|| document.grtElementByTagName('body')[0].clientHeight;
        var cmsURL = editor_config.path_absolute+'laravel-filemanaget?field_name'+field_name;
        if (type = 'image') {
            cmsURL = cmsURL+'&type=Images';
        } else {
            cmsUrl = cmsURL+'&type=Files';
        }

        tinyMCE.activeEditor.windowManager.open({
            file : cmsURL,
            title : 'Filemanager',
            width : x * 0.8,
            height : y * 0.8,
            resizeble : 'no',
            close_previous : 'no'
        });
    },
};
tinymce.init(editor_config);

function updateTinyMCE(){
    tinyMCE.triggerSave();
    console.log('save');
    //alert($('#elm1').html());return false;
    $("textarea")
        .show()
        .css({
            visibility: "visible",
            position: "absolute",
            opacity: 0,
            zIndex: -1,
        })
        .height('0')
        .width('0');
}

$(document).ready(function(){
    $(window).bind('keydown',function(e){
        var buttonCode=e.charCode||e.keyCode;
        if (buttonCode==13){
            $(document).trigger('preSubmitTinyMCE');
        }
    });

    $('input').bind('mousedown',function(){
        $(document).trigger('preSubmitTinyMCE');
    });


});

$(document).bind('preSubmitTinyMCE',function(){
    updateTinyMCE();
});