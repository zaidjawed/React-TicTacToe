import React , {Component} from 'react';
import {row,column,diagonal,changeColor} from './rules';
import Cell from "./Cell.js";
import "./style.css";

class SecBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive : true,
      turn : true,
      C0 : "",
      C1 : "",
      C2 : "",
      C3 : "",
      C4 : "",
      C5 : "",
      C6 : "",
      C7 : "",
      C8 : ""
    };
    this.renderCell = this.renderCell.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  renderCell(i) {
    return <Cell position={i}
      handleClick={this.handleClick}
      turn={this.state.turn}
      isActive={this.state.isActive} />
  }

  checkWinner() {
    var a ,b ,c;
    a = row(this.state);
    b = column(this.state);
    c = diagonal(this.state);

    if(a || b || c){
      this.setState({isActive : false});
    }

    changeColor(a,b,c);
  }

  handleClick(event) {
    this.setState({
      turn : !this.state.turn,
      [`C${event.target.id}`] : event.target.textContent
    } , () => {this.checkWinner()});
  }

  render(){
    return(
      <div className="SecBoard">

        <div className="SecBoard__row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>

        <div className="SecBoard__row">
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>

        <div className="SecBoard__row">
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>

      </div>
    )
  }
}


export default SecBoard;
