import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import tw from "twin.macro";

const Gallery = () => {
    return (
        <Wrapper>
            <PhotoAlbum photos={photos} layout="rows" />
        </Wrapper>


    )


}

const Wrapper = tw.div`flex max-w-[1200px] shadow-2xl my-20 p-10`

export default Gallery;
