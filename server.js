const fetch = require('node-fetch')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const parseMarkdown = require('./src/util/parseMarkdown')
const externalAPI = 'https://api.github.com/gists/86ad06a3774e548d2468b740cb8b0eeb'

function fetchAlerts () {
  return fetch(externalAPI)
    .then(res => res.json())
    .then(markdown => {
      console.log('MARKDOWN', markdown)
      return parseMarkdown(markdown.files["changelog.md"].content)
    })
}

app.get('/api/alerts', (req,res) => {
  console.log('index route')
  fetchAlerts()
    .then(alerts => {
    console.log('ALERTS', alerts)
    return res.json({alerts: alerts})
  })
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)