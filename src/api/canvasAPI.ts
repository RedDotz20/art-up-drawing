import { axiosInstance } from './axios';

export const createCanvasApi = async (userId: string) => {
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

export const getCanvasApi = async (imageId: string) => {
  return await axiosInstance
    .get(`/canvas/getCanvas/${imageId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error Loading Canvas:', error);
    });
};

export const loadCanvasApi = async (userId: string) => {
  return await axiosInstance
    .get('/canvas/loadUserCanvas', {
      params: {
        userId: userId,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error Loading Canvas:', error);
    });
};

export const editCanvasApi = async (canvas: {
  userId: string;
  canvasId: string;
}) => {
  return await axiosInstance
    .post('/canvas/editCanvas', {
      id: canvas.canvasId,
      userId: canvas.userId,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error Selecting Canvas: ', error);
    });
};

export const deleteCanvasApi = async (canvas: {
  userId: string;
  canvasId: string;
}) => {
  return await axiosInstance
    .delete('/canvas/deleteCanvas', {
      params: {
        id: canvas.canvasId,
        userId: canvas.userId,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error Deleting Canvas: ', error);
    });
};
