import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./package-style.css";
import TextFields from './TextFields'
import TextFieldItems from './TextFieldItems'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textFields : [
                {id:1, placeholder: 'Hint Text', error_text:'This field is required.', active: false }, 
                {id:2, placeholder: 'Hint Text', error_text:'The error text can be as long as you want, it will wrap.', active: false }, 
                {id:3, placeholder: 'Floating Label Text', error_text:'This field is required.', active: false }, 
                {id:4, placeholder: 'Multiline and Floating Label', error_text:'This field is required.', active: false }
            ]
        }
    }

    isFieldEmpty(item){
        this.setState(prevState => ({
            textFields : prevState.textFields.map(i => { 
                            var value = document.getElementById(i.id).value; 
                            if(value === "")
                                return {...i, active: true}
                            return {...i, active: false}
                        })
        }));
    }

    render() {
        const {textFields} = this.state;

        return <React.Fragment>

            <TextFields>
                {
                    textFields
                        .map(item => <TextFieldItems
                            key={item.id}
                            {...item}  />
                        )
                }
                <button type="button" onClick={() => this.isFieldEmpty()}>Add To List</button>

            </TextFields>

        </React.Fragment>
    }
}

export default App;
