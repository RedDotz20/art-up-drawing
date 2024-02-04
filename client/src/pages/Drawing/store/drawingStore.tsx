import { create } from 'zustand';
import { SliderValue } from '@nextui-org/react';

interface DrawingStore {
  isDrawing: boolean;
  setIsDrawing: (isDrawing: boolean) => void;

  isErasing: boolean;
  setIsErasing: (isErasing: boolean) => void;

  eraserSize: SliderValue;
  setEraserSize: (size: SliderValue) => void;

  lineWidth: SliderValue;
  setLineWidth: (width: SliderValue) => void;

  lineOpacity: SliderValue;
  setLineOpacity: (opacity: SliderValue) => void;

  lineColor: string;
  setLineColor: (color: string) => void;
}

export const useDrawingStore = create<DrawingStore>((set) => ({
  isDrawing: false,
  setIsDrawing: (isDrawing) => set({ isDrawing }),

  isErasing: false,
  setIsErasing: (isErasing) => set({ isErasing }),

  eraserSize: 10,
  setEraserSize: (eraserSize) => set({ eraserSize }),

  lineWidth: 5,
  setLineWidth: (lineWidth) => set({ lineWidth }),

  lineOpacity: 1,
  setLineOpacity: (lineOpacity) => set({ lineOpacity }),

  lineColor: 'black',
  setLineColor: (lineColor) => set({ lineColor }),
}));
