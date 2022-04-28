import React from "react";
import Item from "./Item";


class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidUpdate = (prevProps) => {
        const {newList} = this.props;
        if(newList !== prevProps.newList) {
            this.setState({
                ...this.state,
                items: [newList,...this.state.items]
            })
        }
    }
    displayItems = () => {
        return(
            this.state.items.map((list,key) => {
                return(
                    <Item key = {key} list = {list} />
                )
            })
        )
    }
    render(){
        return(
            <>
                {this.displayItems()}
            </>
        )
    }
}

export default List;