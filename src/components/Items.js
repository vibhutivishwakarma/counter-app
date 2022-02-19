import React, { Component } from 'react'

export default class Items extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        noOfItem: 0,
       
    }
    
  }

   addItem = ()=>{
      this.setState((ps)=> ({      
        noOfItem: ps.noOfItem+ 1 
      }))
  }
  
  subItem = ()=>{
    this.setState((ps)=> ({
      noOfItem: ps.noOfItem >0 ? ps.noOfItem - 1 : this.state.noOfItem
    }))
  } 

  removeItem =()=>{
    this.props.delete(this.props.index)   
  }

  render() {

  
    return (
      <div>
        <div className="selectItem my-2">
        <span className="badge badge-pill badge-dark selectedNumber mx-3">{this.state.noOfItem == 0 ? 'ZERO': this.state.noOfItem}</span>
        <button type="button" onClick={this.addItem} className="btn btn-secondary controlBtn"><i className="fa-solid fa-plus"></i></button>
        <button type="button" onClick={this.subItem} className="btn btn-info controlBtn text-white"><i className="fa-solid fa-minus"></i></button>
        <button type="button" onClick={this.removeItem} className="btn btn-danger controlBtn"><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    )
  }
}
