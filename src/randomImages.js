const initialImages = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png"];

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