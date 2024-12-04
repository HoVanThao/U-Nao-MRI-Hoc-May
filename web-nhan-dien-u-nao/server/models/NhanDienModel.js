import mongoose from 'mongoose';
const NhanDienSchema = new mongoose.Schema(
    {
        name: String,
        location: String,
        email: String,
        phone: String,
        result: String,
        image: String,
        imagePublicId: String,

        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    },
    { timestamps: true }

);

export default mongoose.model('NhanDien', NhanDienSchema);