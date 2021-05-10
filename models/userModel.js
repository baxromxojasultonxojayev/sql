const Database = require('../modules/postgres')

class UserModel {

  async createUser(name, age, referal_id) {
    let { rows } = await Database.query(`INSERT INTO users (user_name, user_age, referal_id) VALUES ('${name}', '${age}', '${referal_id}')`)
    return rows
  }
  async getUsers() {
    let {rows} = await Database.query(`SELECT * FROM users INNER JOIN referal ON referal.referal_id=users.referal_id`)
    return rows
  }
  async deleteUsers(id) {
    let {rows} = await Database.query(`DELETE FROM users WHERE user_id='${id}'`)
    console.log(rows);
    return rows
  }
  async updateUsers(name, age) {
    let {rows} = await Database.query(`UPDATE users Set (user_name, user_age) WHERE (user_id='${name}', user_age='${age}')`)
    return rows
  }
}

module.exports = new UserModel()