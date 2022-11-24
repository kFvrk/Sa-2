import connection from "./config/db.js";
import Company from "./models/Company.js"
import User from "./models/User.js";
import Model from './models/Model.js';

const migrate = async () => {
    try {
        const result = await connection.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

migrate();