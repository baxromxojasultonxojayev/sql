const UserModel = require('./models/userModel')

let users = new UserModel

async function main() {
  let response = await users.getUsers()
  console.log(response);
}

main()