import { axiosInstance } from './axios';

export const saveCanvasAPI = async (imageData: string) => {
  return await axiosInstance
    .post('/saveCanvas', { imageData: imageData })
    .then((response) => {
      console.log('Canvas saved:', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('Error saving canvas:', error);
    });
};

export const getCanvasAPI = async (imageId: string) => {
  return await axiosInstance
    .get(`/getCanvas/${imageId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error getting canvas:', error);
    });
};
