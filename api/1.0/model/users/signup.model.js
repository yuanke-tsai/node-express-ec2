import { genSaltSync, hashSync } from "bcrypt";
import db from "../db.js";

const query = `
INSERT INTO users (id, name, email, password, created_at)
VALUES (UUID_TO_BIN(?), ?, ?, ?, ?);
`;
/**
 * @param {string} id: uuid for the user
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */
export default async function signup(id, name, email, password) {
	const salt = genSaltSync(10);
	const hashedPwd = hashSync(password, salt);
	const createdAt = new Date();
	const params = [id, name, email, hashedPwd, createdAt];
	

	try {
			const result = await db.execute(query, params);
			console.log(result); // 现在这行代码会执行
			return result;
	} catch (err) {
		throw err;
	}
}