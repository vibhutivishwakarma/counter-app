import React, { Component } from "react";
import Items from "./Items";

export class totalItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalitems: 0,
      item: [{nos: 0},{nos: 0},{nos: 0}],
    };
  }

  resetAll = () => {
    this.setState({
      item:[{nos: 0},{nos: 0},{nos: 0}]
    })
  }

  resetCount = () => {
    this.setState((ps) => ({
      item: ps.item.map(item => ({nos:0}))
    }))
  }

  editItem = (index, action) => {
    console.log(index, action)
    this.setState((ps) =>  {
      let newArr = [...ps.item];
      if(action === 'add'){
        newArr[index] = {nos: newArr[index].nos + 1}
      }
      else if (action === 'sub' && newArr[index].nos !== 0){
        newArr[index] = {nos: newArr[index].nos - 1}
      }
      else if (action === 'remove') {
        newArr = newArr.filter((data, i) => i !== index)
      }
      return ({item: newArr})
    })
  }

  render() {
    let getItem = () => {
      return this.state.item.map((data, index) => (
        <Items key={index} index={index} editItem ={this.editItem} nos={data.nos} />
      ));
    };
  
    let getTotalItem = () => {
      return this.state.item.filter(item => item.nos !==0).length;
    }

    return (
      <>
        <div className="totalitem">
          <p>
            <i className="fa-solid fa-cart-shopping mx-2"></i>
            <span className="badge badge-pill badge-dark totalNumber mx-2">
              {getTotalItem()}
            </span>
            Items
          </p>
          <div className="buttons">
            <button onClick={this.resetCount} type="button" className="btn btn-success mx-2">
              <i className="fa-solid fa-rotate"></i>
            </button>
            <button onClick={this.resetAll} type="button" className="btn btn-info text-white mx-2">
              <i className="fa-solid fa-recycle"></i>
            </button>
          </div>
        </div>
        {getItem()}
      </>
    );
  }
}

export default totalItems;
