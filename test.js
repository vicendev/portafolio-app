
const enumValue = (name) => Object.freeze({toString: () => name})
const _enumRols = Object.freeze({
  ADMIN: enumValue('_enumRols.ADMIN'),
  EDITOR: enumValue('_enumRols.EDITOR')
})


for (const element in _enumRols) {
  console.log(typeof element)
}