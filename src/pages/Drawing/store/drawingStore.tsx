import { create } from 'zustand';
import { SliderValue } from '@nextui-org/react';

interface DrawingStore {
  isDrawing: boolean;
  isErasing: boolean;
  eraserSize: SliderValue;
  lineWidth: SliderValue;
  lineOpacity: SliderValue;
  lineColor: string;

  setIsDrawing: (isDrawing: boolean) => void;
  setIsErasing: (isErasing: boolean) => void;
  setEraserSize: (size: SliderValue) => void;
  setLineWidth: (width: SliderValue) => void;
  setLineOpacity: (opacity: SliderValue) => void;
  setLineColor: (color: string) => void;
}

const useDrawingStore = create<DrawingStore>((set) => ({
  isDrawing: false,
  isErasing: false,
  eraserSize: 10,
  lineWidth: 5,
  lineOpacity: 1,
  lineColor: 'black',

  setIsDrawing: (isDrawing) => set({ isDrawing }),
  setIsErasing: (isErasing) => set({ isErasing }),
  setEraserSize: (eraserSize) => set({ eraserSize }),
  setLineWidth: (lineWidth) => set({ lineWidth }),
  setLineOpacity: (lineOpacity) => set({ lineOpacity }),
  setLineColor: (lineColor) => set({ lineColor }),
}));

export default useDrawingStore;
