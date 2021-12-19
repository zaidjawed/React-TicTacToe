import React , {Component} from 'react';
import SecBoard from "./SecBoard";


class Board extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Board">
        <h1>Tic-Tac-Toe</h1>

        <div className="Board__board">
          <SecBoard/>
        </div>

      </div>
    )
  }
}


export default Board;
