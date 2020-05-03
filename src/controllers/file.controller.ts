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

    pictureRouter.post('/one', upload.single('picture'), (req: Request, res: Response, next: NextFunction) => {
        const file = req.file;
        if (!file) {
            const error = new Error('PLease upload a file');
            return next(error);
        }
        res.send(file)
    });

    pictureRouter.post('/multiple', upload.array('myFiles', 12), (req, res, next) => {
        const files = req.files
        if (!files) {
            const error = new Error('Please choose files')
            return next(error)
        }
        res.send(files)
    })

    app.use('/files', pictureRouter);

};
