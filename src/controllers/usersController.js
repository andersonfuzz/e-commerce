import model from "../models/user.js";

const create = async ({ body }, response) => {
    try {
        const newUser = await model.create(body);
        return response.status(201).json({ userId: newUser.insertId });
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const read = async (request, response) => {
    try {
        const users = await model.read();
        return response.status(200).json(users);
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const searchUser = async ({ params: { id } }, response) => {
    try {
        const user = await model.searchUser(id);
        return response.status(200).json(user);
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const remove = async ({ params: { id } }, response) => {
    try {
        await model.remove(id);
        return response.status(204).json();
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const update = async (request, response) => {
    try {
        const { id } = request.params;
        await model.update(id, request.body);
        return response.status(204).json();
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
export default {
    create,
    read,
    remove,
    update,
    searchUser,
};
