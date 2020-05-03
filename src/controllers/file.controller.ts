import express, { Router, Request, Response, Application, NextFunction } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

export const PictureController = (app: Application) => {

    const pictureRouter: Router = express.Router();

    pictureRouter.post('/', upload.single('picture'), (req: Request, res: Response, next: NextFunction) => {
        const file = req.file;
        if (!file) {
          const error = new Error('PLease upload a file');
          return next(error);
        }
        res.send(file)
      });


      app.use('/file', pictureRouter);
};
