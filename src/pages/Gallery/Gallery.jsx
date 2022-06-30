import React from 'react';
import PhotoAlbum from 'react-photo-album';
import tw from 'twin.macro';
import axios from 'axios';
import { Lightbox } from 'yet-another-react-lightbox';
import { Captions } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/captions.css";

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
    description: photo.description
  }));

  const slides = photos?.map(({ src, width, height, description }) => ({
    src,
    aspectRatio: width / height,
    description
  }));

  return (
    <Wrapper>
      <PhotoAlbum
        photos={photos}
        layout='rows'
        onClick={(event, photo, index) => setIndex(index)}
      />
      <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} plugins={[Captions]} captions={{ descriptionTextAlign: 'center' }} />
    </Wrapper>
  );
};

const Wrapper = tw.div`flex max-w-[1000px] my-20 p-10  bg-white shadow-lg p-6 my-6`;

export default Gallery;
