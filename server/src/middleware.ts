import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

function notFound(req: Request, res: Response, next: NextFunction) {
  res.sendStatus(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.sendStatus(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}

function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401);
    throw new Error('🚫 Un-Authorized 🚫');
  }

  interface CustomRequest extends Request {
    payload?: any;
  }

  try {
    const token = authorization ? authorization.split(' ')[1] : undefined;
    if (!token) {
      throw new Error('🚫 Un-Authorized 🚫');
    }
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);
    (req as CustomRequest).payload = payload;
  } catch (err: any) {
    res.status(401);
    if (err.name === 'TokenExpiredError') {
      throw new Error(err.name);
    }
    throw new Error('🚫 Un-Authorized 🚫');
  }

  return next();
}

export default { notFound, errorHandler, isAuthenticated };
