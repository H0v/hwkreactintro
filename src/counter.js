import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        const counter = JSON.parse(localStorage.getItem("counter")) || 0;
        this.state = { 
            counter : counter
         }
    }

    increment(){
        localStorage.setItem("counter",String(this.state.counter + 1));
            this.setState(state => ({
            counter : +localStorage.getItem("counter")
        }));
    }
    decrement(){
        if( this.state.counter !== 0){
            localStorage.setItem("counter",String(this.state.counter + -1));
            this.setState(state => ({
               counter : +localStorage.getItem("counter")
            }));
        }

    }
    reset(){
        localStorage.setItem("counter","0");
        this.setState(state => ({
            counter : +localStorage.getItem("counter")
         }));
    }
    render() { 
        return ( 
            <>
            <button onClick={() => this.increment()}>Increment</button>
            <span>{this.state.counter}</span>
            <button onClick={() => this.decrement()}>Decrement</button>
            <button onClick={() => this.reset()}>Reset</button>
            </>
            );
    }
}
 
export default Counter;