import imageCompression from 'browser-image-compression';

const UseCompressImage = async (e, data, setData, setProgress, maxSize=0.2) => {
  const imageFile = e.target.files[0],

    options = {
      maxSizeMB: maxSize,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      onProgress: (progress) => {
        setProgress(progress)
      }
    }

  try {
    await imageCompression(imageFile, options).then((result) => {
      setData({ ...data, image: result })
    })
  }

  catch (error) {
    console.log(error);
  }
}

export default UseCompressImage;