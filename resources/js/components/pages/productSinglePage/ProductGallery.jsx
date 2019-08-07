import React, {Component} from 'react';
import Slider from "react-slick";
import {goodGallerySliderNavSettings, goodGallerySliderSettings} from "./productSinglePageSliderSettings";
import singleProductPopupInit from "./productSinglePageMagnificPopupInit";
import {getThumbnail} from "../../../helpers/image";
import $ from "jquery";


class ProductGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
        };
    }

    componentDidMount(){
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
        this.$el = $('.good__gallerySlider .slick-track');
        singleProductPopupInit( this.$el );
    }

    render(){
        const {productAttachments, hasGalleryNav} = this.props;

        console.log( 'productAttachments', productAttachments );

        return (
            <div className="good_gallery">
                <div className={`good_galleryWrap ${hasGalleryNav ? 'has_galleryNav' : 'hasnot_galleryNav'}`}>
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
                                        src={(type == 'image') ? attachment : '/uploads/2018/08/youtube_4.jpg'}
                                        className={"good__gallerySliderFeaturedImg "+(type == 'video'?'video':'')}
                                        video={(type == 'video'?attachment:'')} alt=""
                                    />
                                </a>
                            ))
                        }
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
                                            src={type=='image' ? getThumbnail(attachment,[150, 147]) :
                                                '/uploads/2018/08/youtube_4.jpg'}
                                            className="good__gallerySliderFeaturedImgNav" alt=""
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    )}
                </div>
            </div>
        );
    }
}

export default ProductGallery;