const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute.js')
const niveis = require('./niveisRoute.js')
const turmas = require('./turmaRoute.js')

// module.exports = app => {
//   app.use(bodyParser.json())
//   app.use(pessoas)
//   // app.get('/', (req, res) => res.send('OLÁ')) //////somente teste
// }

module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoas,
    niveis,
    turmas
  )
}