
import { Schema, model } from 'mongoose';

interface Image {
    file: string
}

const imageSchema = new Schema<Image>({
    file: {
        fileName: {
            type: String,
            required: false
        },
        filePath: {
            type: String,
            required: false
        }
    }
}, {
    timestamps: true
});

module.exports = model<Image>('Image', imageSchema);