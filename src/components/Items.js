import React, { Component } from 'react'

export default class Items extends Component {

  constructor(props) {
    super(props)
  }

  addItem = ()=>{
     this.props.editItem(this.props.index, 'add');
  }
  
  subItem = ()=>{
    this.props.editItem(this.props.index, 'sub');
  } 

  removeItem =()=>{
    this.props.editItem(this.props.index, 'remove');   
  }

  render() {
    return (
      <div>
        <div className="selectItem my-2">
        <span className="badge badge-pill badge-dark selectedNumber mx-3">{this.props.nos == 0 ? 'ZERO': this.props.nos}</span>
        <button type="button" onClick={this.addItem} className="btn btn-secondary controlBtn"><i className="fa-solid fa-plus"></i></button>
        <button type="button" onClick={this.subItem} className="btn btn-info controlBtn text-white"><i className="fa-solid fa-minus"></i></button>
        <button type="button" onClick={this.removeItem} className="btn btn-danger controlBtn"><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    )
  }
}
