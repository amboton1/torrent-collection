import { Request } from "express";
import expressAsyncHandler from "express-async-handler";
import { FileArray, UploadedFile } from "express-fileupload";
const Image = require("../models/imageModel");
const fs = require("fs");

const uploadImage = expressAsyncHandler(async (req: UploadedFile | any, res: any) => {
    if (!req.files) {
        return res.status(400).json({ message: 'No file uploaded.' })
    }

    const file = req.files.file;
    let fileResult = {
        fileName: '',
        filePath: ''
    };

    const path = `frontend/public/uploads/${file.name}`;

    if (fs.existsSync(path)) {
        return res.status(409).send({ message: 'Duplicated entry' });
    } else {
        file.mv(`frontend/public/uploads/${file.name}`, async (error: any) => {
            if (error) {
                console.error();
                return res.status(500).send(error);
            }
    
            fileResult = { fileName: file.name, filePath: `/uploads/${file.name}` }
            res.json(fileResult);
    
            await Image.create({
                file: {
                    fileName: fileResult?.fileName,
                    filePath: fileResult?.filePath
                }
            });
        });
    }

});

module.exports = { uploadImage };
