import { useEffect, useState } from 'react';

type useCanvasSaveProps = React.MutableRefObject<HTMLCanvasElement | null>;

export const useCanvasSave = (canvasRef: useCanvasSaveProps): boolean => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      setIsCtrlPressed(true);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      setIsCtrlPressed(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const handleCanvasClick = () => {
      if (isCtrlPressed) {
        //Todo: Save Logic
        console.log('Ctrl+S pressed - Save the canvas!');
      }
    };

    const canvas = canvasRef.current;

    if (canvas) {
      canvas.addEventListener('click', handleCanvasClick);

      return () => {
        canvas.removeEventListener('click', handleCanvasClick);
      };
    }
  }, [isCtrlPressed, canvasRef]);

  return isCtrlPressed;
};
