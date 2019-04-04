import React, {Component} from 'react';

class Quantity extends Component {
    constructor(props){
        super(props);
        this.state = {
            qty: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    increment(){
        this.setState({
            qty: (this.state.qty || 0) + 1,
        });
    }

    decrement(){
        if( this.state.qty > 0 ){
            this.setState({
                qty: this.state.qty > 0 && this.state.qty - 1,
            });
        }
    }

    updateInputValue(evt){
        this.setState({
            qty: (evt.target.value !== '') ? parseFloat(evt.target.value) : ''
        });
    }

    render(){
        return (
            <div className="quantity__wrap">
                <div className="quantity">
                    <label className="screen-reader-text">Количество</label>
                    <input
                        type="number" className="input-text qty text"
                        step="1" min="0" max="" name="quantity"
                        value={this.state.qty}
                        onChange={this.updateInputValue}
                        onInput={this.updateInputValue}
                        title="Кол-во" size="4" pattern="[0-9]*"
                        inputMode="numeric"
                    />
                    <div onClick={this.increment} className="inc button">+</div>
                    <div onClick={this.decrement} className="dec button">-</div>
                </div>
            </div>
        );
    }
}

export default Quantity;