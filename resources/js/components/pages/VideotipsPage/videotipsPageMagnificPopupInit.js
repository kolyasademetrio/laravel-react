export default function videotipsPopupInit($elem){
    $elem.each(function() {
        $(this).magnificPopup({
            type:'image',
            removalDelay: 500,
            mainClass: 'mfp-fade popup_inline',
            showCloseBtn: true,
            closeMarkup: '<div class="mfp-close">&times;</div>',
            closeBtnInside: true,
            closeOnContentClick: false,
            closeOnBgClick: true,
            alignTop: false,
            fixedContentPos: true,
            titleSrc: function(item) {
                return item.el.parent('.videotip__itemInner').attr('title');
            },
            callbacks: {
                open: function() {
                    var headerHeight = $('.header__top').innerHeight();
                    $('.mfp-content').css({
                        'marginTop': headerHeight,
                    });

                    var mp = $.magnificPopup.instance,
                        t = $(mp.currItem.el[0]);

                    var $imgVideo = $(this.wrap[0]).find('img.mfp-img'),
                        $dataVideo = $(this.currItem.el).attr('href');

                    $imgVideo.addClass('has__video').attr('data-video', $dataVideo);

                    $imgVideo.parent('figure').append('<div class="movietiphome__play"></div>');
                    $('.mfp-content .movietiphome__play').click();
                },
                close: function() {

                },
                beforeOpen: function() {
                    var $triggerEl = $(this.st.el),
                        newClass = 'movietiphome__gallery';
                    this.st.mainClass = this.st.mainClass + ' ' + newClass;

                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                },
                elementParse: function(item) {
                    item.src = item.el.find('img').attr('src');
                },
                markupParse: function(template, values, item) {

                },
                change: function(){
                    var mp = $.magnificPopup.instance,
                        t = $(mp.currItem.el[0]);

                    var $imgVideo = $(this.wrap[0]).find('img.mfp-img'),
                        $dataVideo = $(this.currItem.el).attr('href');
                    $imgVideo.addClass('has__video').attr('data-video', $dataVideo);
                }
            },
            gallery: {
                enabled:false,
                navigateByImgClick: false,
            },
            delegate: '.videotip__itemInner',
        });
    });
}