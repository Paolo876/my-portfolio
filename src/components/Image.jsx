import { IKImage } from 'imagekitio-react';

const Image = ({ src, transformation, style, alt }) => {
  return (
    <IKImage 
        src={src} 
        urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
        transformation={transformation} 
        style={style}
        alt={alt}
    />
  )
}

export default Image