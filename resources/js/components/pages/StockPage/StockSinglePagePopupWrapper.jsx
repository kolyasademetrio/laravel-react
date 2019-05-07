import React, {Component} from 'react';
import $ from 'jquery';
import stockSinglePageMagnificPopupInit from './stockSinglePageMagnificPopupInit';


class StockSinglePagePopupWrapper extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.$el = $('.offers_single__header');
        stockSinglePageMagnificPopupInit(this.$el);
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
                {/*<a href="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_02.jpg"
                   className="offers_single_imgLink" style={{width: "50%"}}>
                    <img src="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_02.jpg" alt="" />
                </a>
                <a href="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_01.jpg"
                   className="offers_single_imgLink" style={{width: "50%"}}>
                    <img src="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_01.jpg" alt="" />
                </a>*/}
            </div>
        );
    }
}

export default StockSinglePagePopupWrapper;