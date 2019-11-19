import React from 'react';
import randomImages from './randomImages';
import Board from './components/Board/Board';
import Counter from './components/Counter/Counter';
import GameOver from './components/GameOver/GameOver';
import WinningsList from './components/WinningsList/WinningsList';

import firebase from "./Firebase";


class App extends React.Component {
  state = {
    fields: [],
    choosedImages: [],
    counter: null,
    gameOver: false,
    playerName: '',
    winnings: [],
    showWinners: false
  }

  componentDidMount() {
    this.restart();
  }

  restart = () => {
    const images = randomImages();
    const fields = images.map((image, i) => {
      return {
        id: i,
        image: image,
        active: false,
        solved: false
      }
    });
    this.stopCounter();
    this.setState({ fields, counter: null, winnings: [], showWinners: false });
    this.runCounter();
  }
  showImage = (id) => {
    if (this.state.choosedImages.length < 2) {
      const fields = this.state.fields.map(field => {
        if (field.id === id && !field.solved) {
          field.id = id;
          field.active = true;
          this.setState({choosedImages: [...this.state.choosedImages, field.image]})
        }
        return field;
      });
      this.setState({ fields });
    }
    setTimeout(() => this.checkPair(), 400);
  }

  checkPair = () => {
    if (this.state.choosedImages.length === 2) {
      const [image1, image2] = this.state.choosedImages;
      let fields;
      if (image1 === image2) {
        fields = this.state.fields.map(field => {
          if (field.image === image1) {
            field.solved = true;
            field.active = false;
          }
          return field;
        });
      } else {
        fields = this.state.fields.map(field => {
          field.active = false;
          return field;
        })
      }
      this.setState({ fields, choosedImages: [] });
      this.checkMemo();
    }
  }

  checkMemo = () => {
    const unsolvedFields = this.state.fields.filter((field => !field.solved));
    if (!unsolvedFields.length) {
      this.setState({ gameOver: true});
      this.stopCounter();
    }
  }
  runCounter = () => {
    this.setState({counter: 0});
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1})
    }, 1000)
  }

  stopCounter = () => {
    clearInterval(this.interval);
  }

  handleClick = (id) => {
    this.setState({ showWinners: false });
    this.showImage(id);
  }

  closeGameOverModal = () => {
    this.setState({gameOver: false, counter: null})
  }

  addWinning = () => {
    const db = firebase.firestore();
    db.collection("winnings").add({
      playerName: this.state.playerName,
      time: this.state.counter
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addWinning();
    this.closeGameOverModal();
  }

  handleChange = (e) => {
    this.setState({playerName: e.target.value})
  }

  getWinnings = () => {
    const db = firebase.firestore();
    db.collection("winnings").get()
      .then((querySnapshot) => {
        let winnings = [];
        querySnapshot.forEach((doc) => {
            winnings = [...winnings, doc.data()];
        });
        this.setState({ winnings, showWinners: true });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.counter !== null && <Counter time={this.state.counter} />}
        <Board fields={this.state.fields} handleClick={this.handleClick} />
        <button className="restart-btn" onClick={this.restart}>New memo</button>
        <button onClick={this.getWinnings}>Show winners</button>
        {this.state.showWinners && <WinningsList winnings={this.state.winnings} />}
        <GameOver
          gameOver={this.state.gameOver}
          time={this.state.counter}
          playerName={this.state.playerName}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
