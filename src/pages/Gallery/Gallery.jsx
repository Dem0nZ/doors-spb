import PhotoAlbum from 'react-photo-album';
import tw from 'twin.macro';
import React from 'react';
import axios from 'axios';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  const [rawPhotos, setPhotos] = React.useState();
  const [index, setIndex] = React.useState(-1);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://admin.mebel-178.ru/api/photos');
        const data = await response.data;
        setPhotos(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const photos = rawPhotos?.map((photo) => ({
    src: `http://admin.mebel-178.ru${photo.original_path}`,
    width: photo.width,
    height: photo.height,
  }));

  const slides = photos?.map(({ src, width, height }) => ({
    src,
    aspectRatio: width / height,
  }));

  return (
    <Wrapper>
      <PhotoAlbum
        photos={photos}
        layout='masonry'
        targetRowHeight={250}
        onClick={(event, photo, index) => setIndex(index)}
      />
      <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </Wrapper>
  );
};

const Wrapper = tw.div`flex max-w-[1200px] my-20 p-10`;

export default Gallery;
