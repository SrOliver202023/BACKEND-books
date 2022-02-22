const dtoGenerator = require('./generators/dtos')
const entitiesGenerator = require('./generators/entities')
const repositoriesGenerator = require('./generators/repositories')
const useCaseGenerator = require('./generators/useCase')
const routesGenerator = require('./generators/routes')

module.exports = (plop) => {
  dtoGenerator(plop)
  entitiesGenerator(plop)
  repositoriesGenerator(plop)
  repositoriesGenerator(plop)
  useCaseGenerator(plop)
  routesGenerator(plop)
}
