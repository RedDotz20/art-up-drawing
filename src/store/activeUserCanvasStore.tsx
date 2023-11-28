import { create } from 'zustand';

interface activeUserCanvasStore {
  isAppLoading: boolean;
  setIsAppLoading: (isAppLoading: boolean) => void;

  activeCanvasId: string | null;
  setActiveCanvasId: (canvasId: string | null) => void;

  activeImageData: string | null;
  setActiveImageData: (imageData: string | null) => void;
}

export const useActiveUserCanvasStore = create<activeUserCanvasStore>(
  (set) => ({
    isAppLoading: false,
    setIsAppLoading: (isAppLoading) => set({ isAppLoading }),

    activeCanvasId: null,
    setActiveCanvasId: (activeCanvasId) => set({ activeCanvasId }),

    activeImageData: null,
    setActiveImageData: (activeImageData) => set({ activeImageData }),
  })
);
