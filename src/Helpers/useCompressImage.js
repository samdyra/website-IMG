import {useState} from "react";
import imageCompression from 'browser-image-compression';

function UseCompressImage(event) {
  const [image, setImage] = useState(null);
    async function handleImageUpload(event) {

        const imageFile = event.target.files[0];

        const options = {
          maxSizeMB: 0.2,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        }
        try {
          const compressedFile = await imageCompression(imageFile, options);

          await setImage(URL.createObjectURL(compressedFile));

        } catch (error) {
          console.log(error);
        }

      }
      
  return image
}

export default UseCompressImage;

{/* <>
<div>
<input type="file" accept="image/*" onChange={event => handleImageUpload(event)}/>
<img src={image} style={{width: 400}}></img>
</div>
</> */}