const pool = require("./pool");

const addNewMessages = async (input) => {
    await pool.query('INSERT INTO messages (username, text) VALUES ($1, $2)', [input.username, input.text])
}

const getAllMessages = async () => {
    const messages = await pool.query('SELECT * FROM messages');
    return messages.rows;
}

const getMessageDetails = async (id) => {
    const details = await pool.query('SELECT * FROM messages WHERE id = $1', [id])
    return details.rows;
}


module.exports = { addNewMessages, getAllMessages, getMessageDetails }