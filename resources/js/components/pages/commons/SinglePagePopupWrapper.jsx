import React, {Component} from 'react';
import $ from 'jquery';

class SinglePagePopupWrapper extends Component {
    componentDidMount(){
        const {initPopup} = this.props;
        this.$el = $('.offers_single__header');
        initPopup(this.$el);
    }

    render(){
        const {attachments} = this.props;

        console.log( 'attachments', attachments );

        return (
            <div className="offers_single__header">
                {attachments.map(a => (
                        <a
                            key={a.id}
                            href={a.type == 'image' ? `/imagecache/normal/${a.attachment}` : a.attachment}
                            className={`offers_single_${a.type}Link offers_single_js ${a.type}`}
                            data-type={a.type}
                        >
                            <img src={`/imagecache/normal/${a.thumbnail}`} alt="" className={a.type} />
                        </a>
                    ))
                }
            </div>
        );
    }
}

export default SinglePagePopupWrapper;