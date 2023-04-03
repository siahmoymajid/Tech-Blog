require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.enc)
  : new Sequelize(, {
      host: "localhost",
      dialect: "mysql",
      port: 3001;
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
