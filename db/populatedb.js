
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    text VARCHAR(2000),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES
    ('Bryan', 'Hello everyone!'),
    ('Odin', 'Welcome to the message board!'),
    ('Damon', 'This is my first message.');
`;

async function main() {
    console.log("seeding...");

    const databaseUrl = process.argv[2];

    if (!databaseUrl) {
        console.error("Database URL is required.");
        process.exit(1);
    }

    const client = new Client({
        connectionString: databaseUrl,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("done");
}

main();