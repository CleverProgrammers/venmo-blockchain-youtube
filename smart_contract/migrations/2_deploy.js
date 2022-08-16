const Transactions = artifacts.require('Transactions')

module.exports = function (deployer) {
  deployer.deploy(Transactions)
}
