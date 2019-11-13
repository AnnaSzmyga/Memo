const initialImages = ["dog1.png", "dog2.png", "dog3.png", "dog4.png", "dog5.png", "dog6.png", "dog7.png", "dog8.png"];

const randomImages = () => {
  let images = [...initialImages, ...initialImages];
  let finalImages = [];
  while (images.length) {
    const index = Math.floor(Math.random() * images.length);
    finalImages = [...finalImages, images[index]];
    images.splice(index, 1);
  }
  return finalImages;
}

export default randomImages;