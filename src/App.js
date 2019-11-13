import React from 'react';
import randomImages from './randomImages';
import Board from './components/Board/Board';


class App extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    this.setState({ images: randomImages()})
  }

  render() {
    return (
      <div className="App">
        <Board images={this.state.images} />
      </div>
    );
  }
}

export default App;
