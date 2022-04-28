import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    width: 80%;
    margin: auto;
`
const Header = styled.h1`
    width: 100%;
    background-color: bisque;
    margin: 10px 0px;
    padding: 10px;
    position: relative;
    border-radius: 15px;
`

const Delete = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    &:hover{
        cursor: pointer;
    }
`

class Item extends React.Component{

    deleteHandler = (e) => {
        (e.target.parentNode.remove());
    }
    render(){
        const {list} = this.props;
        return(
            <Wrapper>
                <Header>
                    {list}
                    <Delete onClick={(e) => {
                        this.deleteHandler(e);
                    }}>X</Delete>
                </Header>
            </Wrapper>
        )
    }
}

export default Item;