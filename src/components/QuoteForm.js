import React, {Component} from 'react';
import './QuoteForm.css'
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
        this.setState({inputValue: event.target.value})
    }

    render() {
        return (
            <form className="QuoteForm" onSubmit={this.submitForm}>
                <h3>Character:</h3>
                <label htmlFor="Character">
                    <input type="text" value={this.state.inputValue} onChange={this.changeInput}></input>
                </label>
            </form>
        );
    }
}

export default QuoteForm;