const r = require('restructure')
const Entity = require('../entity')
const StringRef = require('../string-ref')

module.exports = Entity({
  id: r.uint32le,
  textures: new r.Array(StringRef, 3),
  models: new r.Array(StringRef, 4)
})