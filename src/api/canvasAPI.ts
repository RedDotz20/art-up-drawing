import { axiosInstance } from './axios';

export const createCanvasAPi = async (userId: string) => {
  return await axiosInstance
    .post('/canvas/createCanvas', {
      userId: userId,
      imageData: null,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error Saving Canvas: ', error);
    });
};

export const updateCanvasApi = async (canvas: {
  canvasId: string;
  imageData: string;
}) => {
  return await axiosInstance
    .put('/canvas/updateCanvas', {
      id: canvas.canvasId,
      imageData: canvas.imageData,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error Saving Canvas: ', error);
    });
};

export const getCanvasAPI = async (imageId: string) => {
  return await axiosInstance
    .get(`/canvas/getCanvas/${imageId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error Loading Canvas:', error);
    });
};
