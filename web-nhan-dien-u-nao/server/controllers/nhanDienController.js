import NhanDien from '../models/NhanDienModel.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multerMiddleware.js';


export const getAllNhanDien = async (req, res) => {
    const { search, sort } = req.query;
    const queryObject = {
        createdBy: req.user.userId,
    };
    if (search) {
        queryObject.$or = [
            { name: { $regex: search, $options: 'i' } },
            { location: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { phone: { $regex: search, $options: 'i' } },
            { result: { $regex: search, $options: 'i' } },
        ];
    }

    const sortOptions = {
        newest: '-createdAt',
        oldest: 'createdAt',
        'a-z': 'position',
        'z-a': '-position',
    };

    const sortKey = sortOptions[sort] || sortOptions.newest;

    // setup pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const nhandiens = await NhanDien.find(queryObject)
        .sort(sortKey)
        .skip(skip)
        .limit(limit);

    const totalNhanDiens = await NhanDien.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalNhanDiens / limit);

    res
        .status(StatusCodes.OK)
        .json({ totalNhanDiens, numOfPages, currentPage: page, nhandiens });

}

export const createNhanDien = async (req, res) => {
    try {
        req.body.createdBy = req.user.userId;
        if (req.file) {
            const file = formatImage(req.file);
            const response = await cloudinary.v2.uploader.upload(file, {
                folder: 'NhanDien',
            });
            req.body.image = response.secure_url;
            req.body.imagePublicId = response.public_id;
        }

        const nhandien = await NhanDien.create(req.body);

        res.status(StatusCodes.CREATED).json({
            msg: 'Tạo mới nhận diện thành công',
            nhandien,
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            msg: 'Có lỗi xảy ra khi tạo mới nhận diện',
            error: error.message,
        });
    }
};


export const getNhanDien = async (req, res) => {
    const nhandien = await NhanDien.findById(req.params.id);
    if (!nhandien) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Không tìm thấy nhận diện với ID này' });
    }
    res.status(StatusCodes.OK).json({ nhandien });
}

export const deleteNhanDien = async (req, res) => {
    const removedNhanDien = await NhanDien.findByIdAndDelete(req.params.id);
    if (!removedNhanDien) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Không tìm thấy nhận diện với ID này' });
    }
    res.status(StatusCodes.OK).json({ msg: 'Nhận diện đã bị xóa', nhandien: removedNhanDien });
}