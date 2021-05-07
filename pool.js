const ReferalModel = require('./models/referalModel')


async function main() {
  let response = await ReferalModel.createReferal('Others')
  console.log(response);
  return response
}

main()