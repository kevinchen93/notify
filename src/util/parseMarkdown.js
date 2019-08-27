const images = require('../assets/sample-images.json')

const parseMarkdown = markdown => {
  const markdownArray = markdown.split('\n')
  const alerts = []
  let alert = []

  for (const line of markdownArray) {
    if (line.includes('###')) {
      const info = line.split('### ')
      alert.push(info[1])
    } else if (alert.length === 4) {
      alerts.push({
        title: alert[0],
        date: alert[1],
        label: alert[2],
        image: images[alert[3]],
        body: line
      })
      alert = []
    } else if (line !== "") {
      console.log(`Error 422: Not an alert`)
    }
  }
  alerts.sort((a,b) => new Date(b.date) - new Date(a.date))
  console.log('ALERTS', alerts)
  return alerts
}

module.exports = parseMarkdown