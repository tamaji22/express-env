import express from 'express';

export const home = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('index', { title: 'Express' });
};
