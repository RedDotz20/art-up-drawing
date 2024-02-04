import React, { useEffect, useRef } from 'react';
import { useDrawingStore } from './store/drawingStore';
import { useUpdateCanvas } from '../../hooks/useUpdateCanvas';
import { useActiveUserCanvasStore } from '../../store/activeUserCanvasStore';
import { decodeBase64 } from '../../utils/decodeBase64String';

import UserAvatar from './components/UserAvatar';
import Options from './components/Options';
import Menu from './components/Menu';

export default function Drawing() {
  const drawingStore = useDrawingStore();
  const activeUserCanvas = useActiveUserCanvasStore();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const { updateCanvas } = useUpdateCanvas(canvasRef);

  useEffect(() => {
    if (activeUserCanvas.activeImageData) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const decodedImage = decodeBase64(activeUserCanvas.activeImageData);
          const image = new Image();
          image.onload = function () {
            ctx.drawImage(image, 0, 0);
          };
          image.src = URL.createObjectURL(
            new Blob([decodedImage], { type: 'image/png' })
          );
        }
      }
    } else {
      updateCanvas();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Convert SliderValue to number
        ctx.globalAlpha = Number(drawingStore.lineOpacity);
        ctx.strokeStyle = drawingStore.lineColor;

        // Convert SliderValue to number
        ctx.lineWidth = Number(drawingStore.lineWidth);
        ctxRef.current = ctx;
        ctxRef.current = ctx;
      }
    }
  }, [
    drawingStore.lineColor,
    drawingStore.lineOpacity,
    drawingStore.lineWidth,
  ]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (ctxRef.current) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      drawingStore.setIsDrawing(true);
    }
  };

  const endDrawing = () => {
    if (ctxRef.current) {
      ctxRef.current.closePath();
      drawingStore.setIsDrawing(false);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ctxRef.current) {
      return;
    }

    if (drawingStore.isErasing) {
      ctxRef.current.strokeStyle = 'white'; // Use a white color for erasing
      ctxRef.current.lineWidth = Number(drawingStore.eraserSize); // Set the eraser size
    } else {
      ctxRef.current.strokeStyle = drawingStore.lineColor; // Switch back to the drawing color
      ctxRef.current.lineWidth = Number(drawingStore.lineWidth); // Set the drawing line width
    }

    if (!drawingStore.isDrawing) {
      return;
    }

    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  return (
    <div className="bg-slate-700 h-screen w-full flex flex-col items-center justify-center relative">
      <UserAvatar />
      <div className="flex flex-col gap-4 bg-white absolute top-5 left-4 shadow-2xl p-4 rounded-xl min-w-[250px]">
        <Options canvasRef={canvasRef} />
        <Menu
          canvasRef={canvasRef}
          ctxRef={ctxRef}
        />
      </div>

      <div className="flex items-center justify-center bg-slate-700">
        <canvas
          className="cursor-crosshair bg-white"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={1000}
          height={600}
        />
      </div>
    </div>
  );
}
