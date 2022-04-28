import React from "react";
import styled from "styled-components";

const MainForm = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    gap: 5px;
`

const Input = styled.input`
    padding: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    flex: 1;
    font-family: 'Tapestry', cursive;
    font-size: 25px;
    border: 2px solid orange;
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 70px;
    font-size: 25px;
    background-color: bisque;
    border: none;
    &:hover {
        cursor: pointer;
    }
`

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ''
        }
    }

    trimUserValue = () => {
        const {getNewItem} = this.props;
        const newValue = this.state.userInput.trim();
        getNewItem(newValue);
        this.setState({
            userInput: ''
        })
    }
    render(){
        return(
            <MainForm>
                <Input placeholder="Add todolist" value = {this.state.userInput} onChange={e => this.setState({
                    userInput: e.target.value
                })}/>
                <Button onClick={() => {
                    this.trimUserValue();
                }}>+</Button>
            </MainForm>
        )
    }
}

export default Form;