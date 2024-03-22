import connection from "../config/database.js";

const create = async ({ nome, descricao, preco, id_loja }) => {
    try {
        const query = `INSERT INTO produtos(nome,descricao,preco,id_loja) VALUES(?,?,?,?)`;
        const [newProduct] = await connection.execute(query, [
            nome,
            descricao,
            preco,
            id_loja,
        ]);
        return newProduct;
    } catch ({ message }) {
        throw new Error(`unable to add a new product ${message}`);
    }
};
const read = async () => {
    try {
        const query = `SELECT * FROM produtos`;
        const [product] = await connection.execute(query);
        return product;
    } catch ({ message }) {
        throw new Error(`Product list not found ${message}`);
    }
};
const searchProduct = async (id) => {
    try {
        const query = `SELECT * FROM produtos WHERE id = ?`;
        const [product] = await connection.execute(query, [id]);
        return product;
    } catch ({ message }) {
        throw new Error(`Product not found ${message}`);
    }
};
const remove = async (id) => {
    try {
        const query = `DELETE FROM produtos WHERE id=?`;
        await connection.execute(query, [id]);
        return true;
    } catch ({ message }) {
        throw new Error(`Unable to remove this product ${message}`);
    }
};
const update = async (id, product) => {
    try {
        const { nome, descricao, preco, id_loja } = product;
        const query =
            "UPDATE produtos SET nome=?,descricao=?,preco=?,id_loja=? WHERE id=?";
        const [editProduct] = await connection.execute(query, [
            nome,
            descricao,
            preco,
            id_loja,
            id,
        ]);
        return editProduct;
    } catch ({ message }) {
        throw new Error(`Unable to edit this product's data. ${message}`);
    }
};
export default {
    create,
    read,
    remove,
    update,
    searchProduct,
};
