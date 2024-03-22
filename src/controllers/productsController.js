import model from "../models/product.js";

const create = async ({ body }, response) => {
    try {
        const newProduct = await model.create(body);
        return response.status(201).json({ productId: newProduct.insertId });
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const read = async (request, response) => {
    try {
        const product = await model.read();
        return response.status(200).json(product);
    } catch ({ message }) {
        return response.status(500).json(message);
    }
};
const searchProduct = async ({ params: { id } }, response) => {
    try {
        const product = await model.searchProduct(id);
        return response.status(200).json(product);
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
    searchProduct,
};
