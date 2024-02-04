import { Request, Response } from 'express';
import { db } from '../../config/config';

export const createCanvas = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, name, imageData } = req.body;

  try {
    //? Custom logic to generate unique name
    let newName = name || 'Untitled';
    let count = 1;

    //? Check if the name already exists
    while (await db.canvas.findFirst({ where: { userId, name: newName } })) {
      count++;
      newName = `${name || 'Untitled'}(${count})`;
    }

    const createCanvas = await db.canvas.create({
      data: { userId: userId, name: newName, imageData: imageData || null },
    });

    res.status(200).json({
      message: 'Canvas Created Successfully',
      data: createCanvas,
    });
  } catch (error) {
    console.error('Error creating canvas: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCanvas = async (req: Request, res: Response) => {
  try {
    const { id, imageData } = req.body;

    if (!id || !imageData) {
      return res
        .status(400)
        .json({ error: 'Canvas ID and imageData are required.' });
    }

    await db.canvas.update({
      where: { id: id },
      data: { imageData: imageData },
    });

    res.status(204).json({ message: 'Canvas updated successfully.' });
  } catch (error) {
    console.error('Error updating canvas:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const loadUserCanvas = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const loadCanvas = await db.canvas.findMany({
      select: {
        id: true,
        userId: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
      where: { userId: req.query.userId as string },
    });
    res.status(200).json({
      message: 'Canvas Loaded Successfully',
      data: loadCanvas,
    });
  } catch (error) {
    console.error('Error loading canvas: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCanvas = async (req: Request, res: Response) => {
  const { id, userId } = req.body;

  try {
    const checkCanvas = await db.canvas.findUnique({
      where: { id: id, userId: userId },
    });

    if (!checkCanvas) {
      return res.status(404).json({ error: 'Canvas or User Not Found' });
    }

    const deleteCanvas = await db.canvas.delete({
      where: { id: id, userId: userId },
    });

    res.status(200).json({
      message: 'Canvas Deleted Successfully',
      data: deleteCanvas,
    });
  } catch (error) {
    console.error('Error Deleting Canvas:', error);
    res.status(500).send('Internal Server Error');
  }
};
