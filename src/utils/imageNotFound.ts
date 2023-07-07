export const getImageUrl = (path: string, extension: string): string => {
    const isImageUnavailable = path.includes('image_not_available');
    const cardImageSrc = isImageUnavailable ? 'https://i.pinimg.com/564x/db/b2/12/dbb2129035f83c491af200bb58e257cc.jpg' : `${path}.${extension}`;
  
    return cardImageSrc;
  };