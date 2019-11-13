import React from 'react';
import Board from './components/Board/Board';

const initialImages = ["dog1.png", "dog2.png", "dog3.png", "dog4.png", "dog5.png", "dog6.png", "dog7.png", "dog8.png"];

const randomImages = (imagesArr) => {
  let images = [...imagesArr, ...imagesArr];
  let finalImages = [];
  while (images.length) {
    const index = Math.floor(Math.random() * images.length);
    finalImages = [...finalImages, images[index]];
    images.splice(index, 1);
  }
  return finalImages;
}

const images = randomImages(initialImages);


class App extends React.Component {
  state = {
    images: images
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
