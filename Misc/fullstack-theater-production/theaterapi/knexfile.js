module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/theater'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/theater'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
