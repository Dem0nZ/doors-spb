import {data} from '../../moks/data'





const photos = data.map((photo) => ({
    src: photo.original,
    width: photo.width,
    height: photo.height,
    
}));

export default photos;


