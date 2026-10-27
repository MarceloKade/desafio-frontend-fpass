export const getImageUrl = (path: string, extension: string): string => {
  const isImageUnavailable = path.includes("image_not_available");

  if (isImageUnavailable) {
    return "https://i.pinimg.com/564x/db/b2/12/dbb2129035f83c491af200bb58e257cc.jpg";
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${path}.${extension}`;
};
