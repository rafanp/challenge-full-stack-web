import { NextFunction, Request, Response } from 'express';

async function corsHandler(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  return next();
}

export { corsHandler };
