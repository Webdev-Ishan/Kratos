import userModel from '../Models/Usermodel.js';

export const createUser = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error('Email and Password are required');
    }

    const hashpassword = await userModel.hashPassword(password);
    const user = await userModel.create({
        email,
        password: hashpassword
    });

    return user;
};
