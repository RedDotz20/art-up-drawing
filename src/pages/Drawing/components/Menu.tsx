import { Input, Slider, Button } from '@nextui-org/react';
import { GrPowerReset } from 'react-icons/gr';
import { BiSolidEraser } from 'react-icons/bi';

import useDrawingStore from '../store/drawingStore';

interface MenuProps {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  ctxRef: React.MutableRefObject<CanvasRenderingContext2D | null>;
}

export default function Menu({ canvasRef, ctxRef }: MenuProps) {
  const drawingStore = useDrawingStore();

  const resetCanvas = () => {
    if (canvasRef.current && ctxRef.current) {
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;

      //? Clears the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const toggleEraser = () => {
    drawingStore.setIsErasing(!drawingStore.isErasing);
  };

  return (
    <>
      <Input
        label="Brush Color"
        labelPlacement="outside-left"
        type="color"
        onChange={(e) => {
          drawingStore.setLineColor(e.target.value);
        }}
      />

      <Slider
        label="Brush Width"
        step={1}
        minValue={3}
        maxValue={20}
        defaultValue={3}
        className="max-w-md"
        value={drawingStore.lineWidth}
        onChange={drawingStore.setLineWidth}
      />

      <Slider
        label="Brush Opacity"
        step={0.1}
        minValue={0.1}
        maxValue={1}
        defaultValue={1}
        className="max-w-md"
        value={drawingStore.lineOpacity}
        onChange={drawingStore.setLineOpacity}
      />

      <Button
        isIconOnly
        color="secondary"
        onClick={resetCanvas}
      >
        <GrPowerReset />
      </Button>
      <Button
        isIconOnly
        color={drawingStore.isErasing ? 'danger' : 'default'}
        onClick={toggleEraser}
      >
        <BiSolidEraser />
        {/* {drawingStore.isErasing ? 'Disable Eraser' : 'Enable Eraser'} */}
      </Button>

      <Slider
        label="Eraser Size"
        step={1}
        minValue={5}
        maxValue={50}
        defaultValue={5}
        className="max-w-md"
        value={drawingStore.eraserSize}
        onChange={drawingStore.setEraserSize}
      />
    </>
  );
}
