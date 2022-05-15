import PhotoAlbum from "react-photo-album";
import data from "./photos";
import tw from "twin.macro";

const Gallery = () => {
    return (
        <Wrapper>
            <PhotoAlbum photos={data} layout="rows" />
        </Wrapper>


    )


}

const Wrapper = tw.div`flex w-[1500px] my-20`

export default Gallery;
