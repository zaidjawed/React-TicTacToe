import React , {Component} from 'react';
// import $ from 'jquery';
import "./style.css";

class Cell extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: true,
      isHovered: false
    }
    this.toggleStatus = this.toggleStatus.bind(this);
    this.hover = this.hover.bind(this);
    this.unHover = this.unHover.bind(this);
    this.getClass = this.getClass.bind(this);
  }

  getClass () {
    if(this.state.isHovered && this.state.active){
      var x = "";
      if(this.props.turn){
        x = "circle";
        return x;
      }
      else {
        x = "cross";
        return x;
      }
    }
  }

  hover () {
    this.setState({
      isHovered: true
    });
  }

  unHover () {
    this.setState({
      isHovered: false
    });
  }

  toggleStatus (event) {
    if(this.state.active) {
      this.setState({
        active : false
      });

      if(this.props.turn) {
        event.target.textContent = "O";
        this.props.handleClick(event);
      }
      else {
        event.target.textContent = "X";
        this.props.handleClick(event);
      }
    }
  }

  render() {
    return (
      <div className="Cell">
        <button
          className={`Cell__btn ${this.getClass()}`}
          onClick={this.toggleStatus}
          disabled={!this.state.active || !this.props.isActive}
          onMouseEnter={this.hover}
          onMouseLeave={this.unHover}
          id={this.props.position}>
        </button>
      </div>
    )
  }
}


export default Cell;
