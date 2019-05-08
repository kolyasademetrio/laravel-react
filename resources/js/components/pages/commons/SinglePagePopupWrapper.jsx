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
        return (
            <div className="offers_single__header">
                {attachments.map(a => (
                        <a
                            key={a.id}
                            href={a.attachment}
                            className={`offers_single_${a.type}Link offers_single_js ${a.type}`}
                            data-type={a.type}
                        >
                            <img src={a.thumbnail} alt="" className={a.type} />
                        </a>
                    ))
                }
            </div>
        );
    }
}

export default SinglePagePopupWrapper;