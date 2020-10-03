import React, { Component } from 'react'

class Input extends Component {
    constructor(){
        super();
        this.state = {
            inpValue:''
        }
        
    }
    handleChange = (e)=>{        
        this.props.msg(e.target.value)
    }

    
    render() {
        return (
            <div className = "box">
                <label htmlFor = 'inp'>todolist</label>
                <input id = 'inp' ref={inp =>this.input = inp} type = 'text' onChange = {this.handleChange}/>
            </div>
        )
    }
}

export default Input
