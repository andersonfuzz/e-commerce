import model from "../models/user.js";

const create = async ({ body }, response) => {
    try {
        const newUser = await model.create(body);
        return response.status(201).json({ userId: newUser.insertId });
    } catch (error) {
        return response.status(500).json({ error: "error creating user!" });
    }
};
const read = async (request, response) => {
    try {
        const users = await model.read();
        return response.status(200).json(users);
    } catch (error) {
        return response
            .status(500)
            .json({ error: "error when searching for users" });
    }
};
const searchUser = async ({ params: { id } }, response) => {
    try {
        const user = await model.searchUser(id);
        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json({ error: "Unable to search user" });
    }
};
const remove = async ({ params: { id } }, response) => {
    try {
        await model.remove(id);
        return response.status(204).json({ message: `Deleted user id ${id}` });
    } catch (error) {
        return response
            .status(500)
            .json({ error: "Unable to delete this user" });
    }
};
const update = async (request, response) => {
    try {
        const { id } = request.params;
        await model.update(id, request.body);
        return response.status(204).json();
    } catch (error) {
        return response
            .status(500)
            .json({ message: `failed to edit controller` });
    }
};
export default {
    create,
    read,
    remove,
    update,
    searchUser,
};
