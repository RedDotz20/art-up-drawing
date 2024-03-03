import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@tanstack/react-query';
import { deleteCanvasApi } from '../api/canvasAPI';
import { useActiveUserCanvasStore } from '../store/activeUserCanvasStore';

export const useDeleteCanvas = (id: string) => {
	const { user } = useAuth0();
	const userAuthId = user!.sub!.substring(6);
	const activeUserCanvas = useActiveUserCanvasStore();

	const deleteCanvasMutation = useMutation({
		mutationFn: (canvas: { userId: string; canvasId: string }) => {
			return deleteCanvasApi(canvas);
		},
		onSuccess: () => {
			activeUserCanvas.setActiveImageData(null);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const deleteUserCanvas = () => {
		const canvasData = { userId: userAuthId, canvasId: id };
		deleteCanvasMutation.mutate(canvasData);
	};

	return { deleteUserCanvas };
};
