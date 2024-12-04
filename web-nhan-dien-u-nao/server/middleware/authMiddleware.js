import { UnauthenticatedError, UnauthorizedError, BadRequestError } from "../errors/customErrors.js";
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new UnauthenticatedError('xác thực không hợp lệ');
    }

    try {
        const { userId, role } = verifyJWT(token);
        const testUser = userId === '6694621a186d6ff67ccfa2bd';
        req.user = { userId, role, testUser };
        next();
    } catch (error) {
        throw new UnauthenticatedError('xác thực không hợp lệ');
    }
};

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Không được phép truy cập');
        }
        next();
    };
};

export const checkForTestUser = (req, res, next) => {
    if (req.user.testUser) {
        throw new BadRequestError('User dùng thử. Chỉ xem!');
    }
    next();
};