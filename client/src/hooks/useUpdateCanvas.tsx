import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { updateCanvasApi } from '../api/canvasAPI';

type canvasData = { canvasId: string; imageData: string };
type updateCanvasProps = React.MutableRefObject<HTMLCanvasElement | null>;

export const useUpdateCanvas = (canvasRef: updateCanvasProps) => {
	const { canvasId } = useParams<{ canvasId: string }>();
	const queryClient = useQueryClient();

	const updateCanvasMutation = useMutation({
		mutationFn: (canvas: canvasData) => {
			return updateCanvasApi(canvas);
		},
		onSuccess: (newImageData) => {
			//? update data view directly via setQueryData
			queryClient.setQueryData(['userCanvasList'], newImageData);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const updateCanvas = () => {
		const canvas = canvasRef.current;
		if (canvas && canvasId) {
			const imageData = canvas.toDataURL();
			const canvasData = { canvasId, imageData };
			updateCanvasMutation.mutate(canvasData);
		}
	};

	return {
		updateCanvasMutation,
		updateCanvas,
	};
};
