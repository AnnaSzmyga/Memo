import React from 'react';
import randomImages from './randomImages';
import Board from './components/Board/Board';


class App extends React.Component {
  state = {
    fields: [],
    choosedImages: [],
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
        if (field.id === id) {
          field.id = id;
          field.active = true;
          this.setState({choosedImages: [...this.state.choosedImages, field.image]})
        }
        return field;
      });
      this.setState({ fields });
    }
    //if (this.state.choosedImages.length === 2) {
      setTimeout(() => this.checkPair(), 400);
    //}
  }
  checkPair = () => {
    if (this.state.choosedImages.length === 2) {
      console.log('check');
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
    }
  }

  handleClick = (id) => {
    this.showImage(id);
    // if (this.state.choosedImages.length === 2) {
    //   setTimeout(() => this.checkPair(), 400);
    // }
  }

  render() {
    return (
      <div className="App">
        <Board fields={this.state.fields} handleClick={this.handleClick} />
        <button className="restart-btn" onClick={this.restart}>New memo</button>
      </div>
    );
  }
}

export default App;
