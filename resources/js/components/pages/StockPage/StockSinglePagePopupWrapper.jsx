import React, {Component} from 'react';

class StockSinglePagePopupWrapper extends Component {
    render(){
        return (
            <div className="offers_single__header">
                <a href="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_02.jpg"
                   className="offers_single_imgLink" style={{width: "50%"}}>
                    <img src="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_02.jpg"
                         alt="" />
                </a>
                <a href="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_01.jpg"
                   className="offers_single_imgLink" style={{width: "50%"}}>
                    <img src="https://algaph.com/wp-content/uploads/2018/10/s_8_marta_01.jpg" alt="" />
                </a>
            </div>
        );
    }
}

export default StockSinglePagePopupWrapper;