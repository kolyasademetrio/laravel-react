export default function doyouknowPageMagnificPopupInit ($elem) {
    function setPopupMarginTopVideo(windowWidth) {
        if ( $(window).width() > windowWidth ) {
            var windowHeight = $(window).height(),
                popupHeight = $('.mfp-content').innerHeight(),
                marginTop = (windowHeight - popupHeight) / 3;
            $('.mfp-content').css({
                'marginTop': marginTop,
            });
        }
    }

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
                return item.el.attr('title');
            },
            callbacks: {
                open: function() {
                    setPopupMarginTopVideo(570);

                    var mp = $.magnificPopup.instance,
                        t = $(mp.currItem.el[0]);

                    var $imgVideo = $(this.wrap[0]).find('img.mfp-img'),
                        $dataVideo = $(this.currItem.el).attr('href');
                    $imgVideo.addClass('has__video').attr('data-video', $dataVideo);

                    $imgVideo.parent('figure').append('<div class="movietiphome__play"></div>');

                    $('.mfp-content .movietiphome__play').click();

                    //
                    var headerHeight = $('.header__top').innerHeight();
                    $('.mfp-content').css({
                        'marginTop': headerHeight,
                    });





                    if ( t.data('type') === 'video' ) {
                        if ( !$(this.wrap[0]).find('img.mfp-img').hasClass('has__video') ) {
                            var $imgVideo = $(this.wrap[0]).find('img.mfp-img'),
                                $dataVideo = $(this.currItem.el).attr('href');
                            $imgVideo.addClass('has__video').attr('data-video', $dataVideo);
                            $imgVideo.parent('figure').addClass('wrap__hasVideo');
                            if ( !$imgVideo.parent('figure').find('.hasVideo__play').length ) {
                                $imgVideo.parent('figure').append('<div class="hasVideo__play"></div>');
                            }
                        }
                    }
                },
                close: function() {

                },
                beforeOpen: function() {
                    var $triggerEl = $(this.st.el),
                        newClass = 'movietiphome__gallery offers__items__popup';
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
            delegate: '.offers__imageWrap.has__video',
        });
    });
}