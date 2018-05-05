import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Snackbar from './Snackbar';
import "./package-style.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMessage : false,
        }
    }

    handleClick(){
        this.setState({
            showMessage: true
        });

        var that = this;

        var duration = document.getElementById("duration").value; 
        if (duration == 0)
            duration = 500

        setTimeout(function(){
            that.closeMessage()
        }, duration);
    }

    closeMessage(){
        this.setState({
            showMessage: false 
        });
    }

    render() {
        const {showMessage} = this.state;

        return <React.Fragment>

            <Snackbar
                showMessage={showMessage} 
                handleClick={() => this.handleClick()}
                closeMessage={() => this.closeMessage()}
            />

        </React.Fragment>
    }
}

export default App;
