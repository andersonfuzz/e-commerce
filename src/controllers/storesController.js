import model from "../models/store.js";

const create = async ({ body }, response) => {
    try {
        const newStore = await model.create(body);
        return response.status(201).json({ storeId: newStore.insertId });
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const read = async (request, response) => {
    try {
        const store = await model.read();
        return response.status(200).json(store);
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const searchByStore = async ({ params: { id } }, response) => {
    try {
        const store = await model.searchByStore(id);
        return response.status(200).json(store);
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
    searchByStore,
};
