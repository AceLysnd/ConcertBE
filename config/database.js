import { Sequelize } from "sequelize";
const db = new Sequelize('concert', 'root', '', {
    host: "https://concert-be.vercel.app/",
    dialect: "mysql"
})

export default db;