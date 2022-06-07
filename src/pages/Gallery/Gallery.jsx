import PhotoAlbum from "react-photo-album";
import tw from "twin.macro";
import {images} from '../../moks/images'

const photos = images.map((photo) => ({
  src: photo.original,
  width: photo.width,
  height: photo.height,
}));

const Gallery = () => {
    return (
        <Wrapper>
            <PhotoAlbum photos={photos} layout="rows" />
        </Wrapper>
    )
}

const Wrapper = tw.div`flex max-w-[1200px] shadow-2xl my-20 p-10`

export default Gallery;
