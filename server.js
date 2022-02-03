/* eslint-disable no-undef */
// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults({
  static: './build'
})
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3001

let rawdata = fs.readFileSync(path.resolve(__dirname, 'db.json'))
let data = JSON.parse(rawdata)

const router = jsonServer.router(data)
server.use(middlewares)

server.get('/health', (req, res) => {
  res.send('ok')
})

server.use(router)

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`)
})