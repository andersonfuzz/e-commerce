import connection from "../config/database.js";

const create = async ({ nome, endereco, telefone, email }) => {
    try {
        const query = `INSERT INTO lojas(nome,endereco,telefone,email) VALUES(?,?,?,?)`;
        const [newStore] = await connection.execute(query, [
            nome,
            endereco,
            telefone,
            email,
        ]);
        return newStore;
    } catch ({ message }) {
        throw new Error(`Unable to add store ${message}`);
    }
};
const read = async () => {
    try {
        const query = `SELECT * FROM lojas`;
        const [stores] = await connection.execute(query);
        return stores;
    } catch ({ message }) {
        throw new Error(`Store list not found ${message}`);
    }
};
const searchByStore = async (id) => {
    try {
        const query = `SELECT * FROM lojas WHERE id = ?`;
        const [store] = await connection.execute(query, [id]);
        return store;
    } catch ({ message }) {
        throw new Error(`Store not found ${message}`);
    }
};
const remove = async (id) => {
    try {
        const query = `DELETE FROM lojas WHERE id=?`;
        await connection.execute(query, [id]);
        return true;
    } catch ({ message }) {
        throw new Error(`Unable to remove this store ${message}`);
    }
};
const update = async (id, store) => {
    try {
        const { nome, endereco, telefone, email } = store;
        const query =
            "UPDATE lojas SET nome=?,endereco=?,telefone=?,email=? WHERE id=?";
        const [editUser] = await connection.execute(query, [
            nome,
            endereco,
            telefone,
            email,
            id,
        ]);
        return editUser;
    } catch ({ message }) {
        throw new Error(`Unable to edit this store's data. ${message}`);
    }
};
export default {
    create,
    read,
    remove,
    update,
    searchByStore,
};
