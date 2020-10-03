import React, { Component } from 'react'
import List from './List'
import Input from './Input'


class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            message : ''
        }
    }
    //声明方法接收input传的值
    message(msg){
        this.setState({
            message:msg
        })
    }
    
    render() {
        return (
            <div>            
                <Input msg = {this.message.bind(this)}/>
                <List str = {this.state.message}/>
            </div>
        )
    }
}

export default TodoList