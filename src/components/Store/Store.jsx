import React from "react";
import { products } from "../Products/Products";
import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";


export default class Store extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        icon: "view_list" 
      };
      this.poducts = products;
  
      this.handleSwitch = this.handleSwitch.bind(this);
    }
  
    handleSwitch() {

      this.setState({icon: this.state.icon === 'view_list' ? 'view_module' : 'view_list'})

    }
  
    render() {
  
      return (
        <>
          <IconSwitch icon={this.state.icon} onSwitch={this.handleSwitch} />
          {this.state.icon === "view_list" ? (
            <ListView cards={this.poducts} />
          ) : (
            <CardsView cards={this.poducts} />
          )}
        </>
      );
    }
  }