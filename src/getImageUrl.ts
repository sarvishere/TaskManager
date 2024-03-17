import { baseURL } from "../services/api-client";

const getImageUrl = (imagePath: string) => {
  return `${baseURL}/${imagePath}`;
};

export default getImageUrl;
