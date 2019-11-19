import React from 'react';
import randomImages from './randomImages';
import Board from './components/Board/Board';


class App extends React.Component {
  state = {
    fields: [],
    choosedImages: [],
    gameOver: false
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
    this.setState({ fields });
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
      console.log('end!');
      this.setState({ gameOver: true});
    }
  }

  handleClick = (id) => {
    this.showImage(id);
  }

  render() {
    return (
      <div className="App">
        <Board fields={this.state.fields} handleClick={this.handleClick} />
        <button className="restart-btn" onClick={this.restart}>New memo</button>
        {this.state.gameOver && <p>Congratulations!</p>}
      </div>
    );
  }
}

export default App;
