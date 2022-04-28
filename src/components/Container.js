import React from "react";
import styled from "styled-components";
import Form from "./Form";
import List from "./List";



const MainComponent = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    transform: translateY(40px);
`
const Header = styled.div`
    font-size: 45px;
    width: 100%;
    height: 60px;
    text-align: center;
`

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            newItem: ''
        }
    }

    getNewItem = (newItemFromUser) => {
       this.setState({
           newItem: newItemFromUser
       })
    }
    render(){
        return(
            <MainComponent>
                <Header>
                    TODOLIST
                </Header>
                <Form getNewItem = {this.getNewItem}/>
                <List newList = {this.state.newItem}/>
            </MainComponent>
        )
    }
}

export default Container;