import connection from "../config/database.js";

const create = async ({ cpf, nome, email, senha }) => {
    try {
        const query = `INSERT INTO usuarios(cpf,nome,email,senha) VALUES(?,?,?,?)`;
        const [newUser] = await connection.execute(query, [
            cpf,
            nome,
            email,
            senha,
        ]);
        return newUser;
    } catch ({ message }) {
        throw new Error(`error creating user! ${message}`);
    }
};
const read = async () => {
    try {
        const query = `SELECT * FROM usuarios`;
        const [users] = await connection.execute(query);
        return users;
    } catch ({ message }) {
        throw new Error(`error when searching for users ${message}`);
    }
};
const searchUser = async (id) => {
    try {
        const query = `SELECT * FROM usuarios WHERE id = ?`;
        const [user] = await connection.execute(query, [id]);
        return user;
    } catch ({ message }) {
        throw new Error(`Unable to search user ${message}`);
    }
};
const remove = async (id) => {
    try {
        const query = `DELETE FROM usuarios WHERE id=?`;
        await connection.execute(query, [id]);
        return true;
    } catch ({ message }) {
        throw new Error(`Unable to delete this user ${message}`);
    }
};
const update = async (id, user) => {
    try {
        const { cpf, nome, email, senha } = user;
        const query =
            "UPDATE usuarios SET cpf=?,nome=?,email=?,senha=? WHERE id=?";
        const [editUser] = await connection.execute(query, [
            cpf,
            nome,
            email,
            senha,
            id,
        ]);
        return editUser;
    } catch ({ message }) {
        throw new Error(`failed to edit. ${message}`);
    }
};
export default {
    create,
    read,
    remove,
    update,
    searchUser,
};
