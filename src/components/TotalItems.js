import React, { Component } from "react";
import Items from "./Items";

export class totalItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalitems: 0,
      item: [
        {
          nos: 0,
        },
        {
          nos: 0,
        },
        {
          nos: 0,
        },
        
      ],
    };    
  }

  deleteItem = (index) => {

    this.setState((ps)=> ({      
          item: ps.item.filter((data,i)=> {
            return i !== index
          })
    }))
};

  resetCount = ()=>{

    this.setState((ps)=>({
      item: ps.item.map((data) => {
        return ({nos:0})
      })
    }))

  }

  render() {

    let getItem = ()=>{
      return this.state.item.map((data,index) => <Items key={index} delete={this.deleteItem} index={index}/>)
    }

    return (
      <>
        <div className="totalitem">
          <p>
            <i className="fa-solid fa-cart-shopping mx-2"></i>
            <span className="badge badge-pill badge-dark totalNumber mx-2">
              {this.state.totalitems }
            </span>
            Items
          </p>
          <div className="buttons">
            <button onClick={this.resetCount} type="button" className="btn btn-success mx-2">
              <i className="fa-solid fa-rotate"></i>
            </button>
            <button type="button" className="btn btn-info text-white mx-2">
              <i className="fa-solid fa-recycle"></i>
            </button>
          </div>
        </div>
        {/* <Items /> */}
        {getItem()}
      </>
    );
  }
}

export default totalItems;
