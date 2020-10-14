import React, {Component} from 'react';
import './QuoteForm.css'

const MAX_LENGTH = 10;

class QuoteForm extends Component {
    constructor(props){
        super(props)
        this.state = {inputValue: 'Test'};
        this.submitForm = this.submitForm.bind(this);
        this.changeInput = this.changeInput.bind(this); 
    }
   
    submitForm=(event)=>{
        alert('Searching: '+ this.state.inputValue);
        event.preventDefault();
    }
    changeInput=(event)=>{
        if (event.target.value.length<=MAX_LENGTH){
            this.setState({inputValue: event.target.value});
        }
       
    }

    render() {
        const inputMax = this.state.inputValue.length >= MAX_LENGTH;
        return (
            <form className="QuoteForm" onSubmit={this.submitForm}>
                <h3>Character:</h3>
                <label htmlFor="Character">
                    <input className={inputMax?'input-max':'input-ok'} type="text" value={this.state.inputValue} onChange={this.changeInput}></input>
                </label>
            </form>
        );
    }
}

export default QuoteForm;