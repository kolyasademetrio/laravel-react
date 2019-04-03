import React, {Component} from 'react';
import Breadcrumbs from "../../../helpers/breadcrumbs";
import Slider from 'react-slick';
import {goodGallerySliderSettings, goodGallerySliderNavSettings} from '../productSinglePage/productSinglePageSliderSettings';
import ReactHtmlParser from 'react-html-parser';
import {getThumbnail} from '../../../helpers/image';
import $ from 'jquery';
import singleProductPopupInit from './productSinglePageMagnificPopupInit';

class ProductSinglePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            test: 'sddsds'
        };
    }

    componentDidMount() {
        const {setProductSingle} = this.props;
        const productSlug = this.props.match.params.product;

        axios.get(`/api/products/${productSlug}`)
            .then( ({data}) => {
                setProductSingle(data);
            })
            .then(() => {
                this.setState({
                    nav1: this.slider1,
                    nav2: this.slider2
                });

                this.$el = $('.good__gallerySlider .slick-track');

                singleProductPopupInit( this.$el );

                console.log( this.$el );
            });
    }

    destroyPopup(){
        console.log( $('.good__gallerySliderItem', this.$el) );

        $.fn.off('click.magnificpopup');
        $.fn.removeData('magnificPopup');

        /*$('.good__gallerySliderItem', this.$el).off('click');
        $('.good__gallerySliderItem', this.$el).removeData('magnificPopup');*/
    }

    render(){
        if (!this.props.isSingleReady) {
            return null;
        }
        
        const {title, excerpt, descr, regular_price, sale_price, currency} = this.props.product;
        
        const {productAttachments} = this.props;
        
        const hasGalleryNav =  productAttachments.length > 1 ? true : false;

        const hasSalePrice = this.props.isSingleReady && sale_price == 0 ? false : true;

        return (
            <div id="primary" role="main" className="single-product content-area twentyfifteen woocommerce-page woocommerce">
                <div id="main" className="site-main t15wc">
                    <div className="container woocomm__container">
                        <div className="row woocomm__row">
                            <div className="col-xs-12">
                                <div className="woocomm__col">

                                    <Breadcrumbs />

                                    <div id="product-107" className="post-107 product type-product status-publish has-post-thumbnail product_cat-cosmeticiviso first instock shipping-taxable purchasable product-type-simple">
                                        <div className="good_gallery">
                                            <div
                                                className={"good_galleryWrap "+(hasGalleryNav ? 'has_galleryNav' : 'hasnot_galleryNav')}
                                            >

                                                <Slider
                                                    {...goodGallerySliderSettings}
                                                    className={'good__gallerySlider'}
                                                    asNavFor={this.state.nav2}
                                                    ref={slider => (this.slider1 = slider)}
                                                >
                                                    {
                                                        productAttachments.map(({attachment, type, id}) =>(
                                                            <a href={attachment}
                                                               className={'good__gallerySliderItem ' + type}
                                                               data-type={type}
                                                               key={id}
                                                            >
                                                                <img
                                                                    src={(type == 'image') ?
                                                                            attachment : '/uploads/2018/08/youtube_4.jpg'
                                                                        }
                                                                    alt=""
                                                                    className={"good__gallerySliderFeaturedImg "+(type == 'video'?'video':'')}
                                                                    video={(type == 'video'?attachment:'')}
                                                                />
                                                            </a>
                                                        ))
                                                    }


                                                    {/*<a href="https://algaph.com/wp-content/uploads/2018/08/5-ml_0001.jpg"
                                                       className="good__gallerySliderItem image" data-type="image"
                                                    >
                                                        <img
                                                            src="https://algaph.com/wp-content/uploads/2018/08/5-ml_0001.jpg"
                                                            alt="" className="good__gallerySliderFeaturedImg"
                                                        />
                                                    </a>

                                                    <a href="https://algaph.com/wp-content/uploads/2018/07/5-ml_0002.jpg"
                                                       className="good__gallerySliderItem image" data-type="image"
                                                    >
                                                        <img
                                                            src="https://algaph.com/wp-content/uploads/2018/07/5-ml_0002.jpg"
                                                            alt="" className="good__gallerySliderFeaturedImg"
                                                        />
                                                    </a>
                                                    <a href="https://algaph.com/wp-content/uploads/2018/08/50-ml_0007.jpg"
                                                       className="good__gallerySliderItem image" data-type="image"
                                                    >
                                                        <img
                                                            src="https://algaph.com/wp-content/uploads/2018/08/50-ml_0007.jpg"
                                                            alt="" className="good__gallerySliderFeaturedImg"
                                                        />
                                                    </a>

                                                    <a href="https://www.youtube.com/watch?v=Df-Wo48P-M8"
                                                       className="good__gallerySliderItem video" data-type="video"
                                                    >
                                                        <img
                                                            src="https://algaph.com/wp-content/uploads/2018/08/youtube_4.jpg"
                                                            alt="" className="good__gallerySliderFeaturedImg video"
                                                            video="https://www.youtube.com/watch?v=Df-Wo48P-M8"
                                                        />
                                                    </a>*/}
                                                </Slider>



                                                {hasGalleryNav && (
                                                    <Slider
                                                        {...goodGallerySliderNavSettings}
                                                        className={'good__gallerySliderNav'}
                                                        asNavFor={this.state.nav1}
                                                        ref={slider => (this.slider2 = slider)}
                                                    >
                                                        {
                                                            productAttachments.map(({attachment, type, id}) =>(
                                                                <div className="good__gallerySliderItemNav" key={id}>
                                                                    <img
                                                                        src={type=='image' ?
                                                                            getThumbnail(attachment,[150, 147]) :
                                                                            '/uploads/2018/08/youtube_4.jpg'}
                                                                        alt="" className="good__gallerySliderFeaturedImgNav"
                                                                    />
                                                                </div>
                                                            ))
                                                        }

                                                        {/*<div className="good__gallerySliderItemNav">
                                                            <img
                                                                src="https://algaph.com/wp-content/uploads/2018/08/5-ml_0001-150x147.jpg"
                                                                alt="" className="good__gallerySliderFeaturedImgNav"
                                                            />
                                                        </div>

                                                        <div className="good__gallerySliderItemNav">
                                                            <img
                                                                src="https://algaph.com/wp-content/uploads/2018/07/5-ml_0002-150x147.jpg"
                                                                alt="" className="good__gallerySliderFeaturedImgNav"
                                                            />
                                                        </div>
                                                        <div className="good__gallerySliderItemNav">
                                                            <img
                                                                src="https://algaph.com/wp-content/uploads/2018/08/50-ml_0007-150x147.jpg"
                                                                alt="" className="good__gallerySliderFeaturedImgNav"
                                                            />
                                                        </div>

                                                        <div className="good__gallerySliderItemNav">
                                                            <img
                                                                src="https://algaph.com/wp-content/uploads/2018/08/youtube_4.jpg"
                                                                alt="" className="good__gallerySliderFeaturedImgNav"
                                                            />
                                                        </div>*/}
                                                    </Slider>
                                                )}


                                            </div>
                                        </div>

                                        <div className="summary entry-summary">
                                            <h1 className="product_title entry-title">{ReactHtmlParser(title)}</h1>
                                            <div className="goodSingle__excerpt">{ReactHtmlParser(excerpt)}</div>
                                            <div className="goodSingle__descr">{ReactHtmlParser(descr)}</div>
                                            <div className="goodSingle__table">
                                                <div className="tr">
                                                    <div className="th">Цена</div>
                                                    <div className="th">Количество</div>
                                                    <div className="th">Доставка</div>
                                                </div>
                                                <div className="tr">
                                                    <div className="td">
                                                        <div className="price">
                                                            <span className="woocommerce-Price-amount amount">
                                                                {ReactHtmlParser(hasSalePrice ? sale_price : regular_price)}
                                                                <span className="woocommerce-Price-currencySymbol">{ReactHtmlParser(currency)}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="td">
                                                        <form className="cart" method="post">
                                                            <div className="quantity__wrap">
                                                                <div className="quantity">
                                                                    <label className="screen-reader-text">Количество</label>
                                                                    <input type="number" className="input-text qty text"
                                                                           step="1" min="0" max="" name="quantity" defaultValue="1"
                                                                           title="Кол-во" size="4" pattern="[0-9]*"
                                                                           inputMode="numeric"/>
                                                                    <div className="inc button">+</div>
                                                                    <div className="dec button">-</div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="td terms">
                                                        <div className="good_shipping_terms">
                                                            <div className="good_shipping_imgWrap">
                                                                <img src="/uploads/2018/08/shipping-e1535634026174.png"/>
                                                            </div>
                                                            <div className="good_shipping_text">
                                                                Бесплатная при<br/> заказе от 299 грн
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tr">
                                                    <div className="td">&nbsp;</div>
                                                    <div className="td">
                                                        <button onClick={this.destroyPopup.bind(this)} type="submit" data-product_id="107" data-product_sku="ss"
                                                                data-quantity="1" className="button product_type_simple">В
                                                            корзину
                                                        </button>
                                                    </div>
                                                    <div className="td">&nbsp;</div>
                                                </div>
                                            </div>
                                            <div className="woocommerce-product-details__short-description">
                                                <p>Крем для</p>
                                            </div>
                                        </div>

                                        <div className="woocommerce-tabs wc-tabs-wrapper">
                                            <ul className="tabs wc-tabs" role="tablist">
                                                <li className="description_tab active">
                                                    <a href="#tab-description">Описание</a>
                                                </li>
                                                <li className="ingredients_tab">
                                                    <a href="#tab-ingredients">Состав</a>
                                                </li>
                                                <li className="usage_tab">
                                                    <a href="#tab-usage">Применение</a>
                                                </li>
                                                <li className="reviews_tab">
                                                    <a href="#tab-reviews">Отзывы (0)</a>
                                                </li>
                                            </ul>

                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'block'}}>
                                                <p style={{textAlign: 'left'}} align="center">
                                                    <strong>Крем для самой чувствительной кожи</strong>
                                                </p>
                                                <p style={{textAlign: 'left'}} align="center">
                                                    <strong>Использование защитного детского крема&nbsp;
                                                        <span>Crema</span>
                                                        <span>&nbsp;</span>
                                                        <span>Protettiva</span>
                                                        <span>&nbsp;</span>
                                                        <span>dei</span><span>&nbsp;</span>
                                                        <span>Piccoli</span>
                                                    </strong>
                                                </p>
                                                <p style={{textAlign: 'left'}} align="center">
                                                    <strong>может стать отличным способом профилактики многих дерматологических симптомов.</strong>
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    <em>Детская кожа нуждается в бережном уходе с первых дней жизни.</em>
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    <em>Правильный выбор косметических средств позволит надёжно защитить ещё неокрепший слой эпидермиса</em>
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    <em>от негативного влияния бактерий и сохранить ее естественную увлажнённость.</em>
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    Главными функциями, которые выполняет крем является увлажнение и защита кожи малыша
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    от воздействия внешних факторов. Крем насыщает эпидермис питательными веществами и влагой,
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    восстанавливая и сохраняя их естественный запас. В его состав входят специальные смягчающие кожу
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    компоненты на основе природных ингредиентов.
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    Благодаря витаминам, минералам и маслам она остаётся гладкой и нежной.
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    <strong>Результаты:</strong>
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    — уменьшилось количество покраснений – 97%
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    — ранки на коже быстрее заживаются – 85%
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    — исчезло раздражение на коже – 88%
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    * По результатам потребительского тестирования, подводимого в течении 6 недель
                                                </p>
                                                <p style={{textAlign: 'left'}}>
                                                    с участием 52 женщин, которые использовали Защитный детский крем Alga Ph при уходе за кожей дитей.
                                                </p>
                                                <p style={{textAlign: 'left'}}>&nbsp;</p>
                                                <p style={{textAlign: 'left'}}>&nbsp;</p>
                                                <p style={{textAlign: 'left'}}>&nbsp;</p>
                                                <p style={{textAlign: 'left'}}>&nbsp;</p>
                                            </div>

                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--ingredients panel entry-content wc-tab" id="tab-ingredients" role="tabpanel" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                                                <p style={{textAlign: 'left'}}><strong>Состав крема:</strong></p>
                                                <p style={{textAlign: 'left'}}>— гидролат ромашки</p>
                                                <p style={{textAlign: 'left'}}>— масло абрикосовых косточек</p>
                                                <p style={{textAlign: 'left'}}>— OLIVEM 1000</p>
                                                <p style={{textAlign: 'left'}}>— масло ши</p>
                                                <p style={{textAlign: 'left'}}>— масло виноградных косточек</p>
                                                <p style={{textAlign: 'left'}}>— Д-пантенол</p>
                                                <p style={{textAlign: 'left'}}>— витамин F</p>
                                                <p style={{textAlign: 'left'}}>— экстракт календулы</p>
                                                <p style={{textAlign: 'left'}}>— Euxyl PE 9010</p>
                                                <p style={{textAlign: 'left'}}>&nbsp;</p>
                                                <p style={{textAlign: 'left'}}>&nbsp;</p>
                                                <p style={{textAlign: 'left'}}>&nbsp;</p>
                                            </div>


                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--usage panel entry-content wc-tab" id="tab-usage" style={{background: 'url(&quot;https://algaph.com/wp-content/uploads/2018/08/Nastojka-pri-miome-matki.jpg&quot;) right bottom / auto 385px no-repeat', minHeight: '480px', display: 'none'}}>
                                                <p><strong>Способ нанесения:</strong></p>
                                                <p>
                                                    Крем необходимо нанести тонким слоем на внутреннюю поверхность собственных ладоней,
                                                </p>
                                                <p>
                                                    после чего дайте ему нагреться 15-20 секунд. Теперь крем можно наносить на лицо и тело ребенка.
                                                </p>
                                                <p>
                                                    Особое внимание уделите участкам кожи с явными признаками покраснением или шелушением.
                                                </p>
                                                <p>
                                                    При использовании подгузников, крем <strong><span>Crema</span> <span lang="EN-US">Protettiva</span> <span>dei</span> <span>Piccoli</span></strong> рекомендуется применять ежедневно.
                                                </p>
                                            </div>

                                            <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" style={{display: 'none'}}>
                                                <div id="reviews" className="woocommerce-Reviews">
                                                    <div id="comments" className="comments">
                                                        <h2 className="woocommerce-Reviews-title">Отзывы</h2>
                                                        <p className="woocommerce-noreviews">Отзывов пока нет.</p>
                                                    </div>

                                                    <div id="review_form_wrapper" className="review_form_wrapper">
                                                        <div id="review_form">
                                                            <div id="respond" className="comment-respond">
                                                                <span id="reply-title" className="comment-reply-title">
                                                                    Будьте первым, кто оставил отзыв на “Детский крем” <small><a id="cancel-comment-reply-link" href="#" style={{display:'none'}}>Отменить ответ</a></small>
                                                                </span>
                                                                <form method="post" id="commentform" className="comment-form" noValidate="">
                                                                    <div className="reply-title-after">Используйте
                                                                        данную форму, чтобы оставить отзыв о товаре или
                                                                        задать вопрос
                                                                    </div>
                                                                    <p className="comment-form-author">
                                                                        <label>Ваше имя &nbsp;<span className="required">*</span></label>
                                                                        <input id="author" name="author" type="text" size="30" aria-required="true" required=""/>
                                                                    </p>
                                                                    <p className="comment-form-email">
                                                                        <label>E-mail &nbsp;<span className="required">*</span></label>
                                                                        <input id="email" name="email" type="email" size="30" aria-required="true" required=""/>
                                                                    </p>
                                                                    <p className="comment-form-comment">
                                                                        <label>Текст сообщения &nbsp;<span className="required">*</span></label>
                                                                        <textarea id="comment" name="comment" cols="45" rows="8"></textarea>
                                                                    </p>
                                                                    <p className="form-submit">
                                                                        <input name="submit" type="submit" id="submit" className="submit" value="Отправить"/>
                                                                        <input type="hidden" name="comment_post_ID" id="comment_post_ID"/>
                                                                        <input type="hidden" name="comment_parent" id="comment_parent"/>
                                                                    </p>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

}


export default ProductSinglePage;