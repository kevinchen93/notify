const fetchAlerts = props => {
  return fetch(`http://localhost:5000/api/alerts`)
    .then(res => {
      console.log('RES', res)
      return res.json()
    })
}

export default fetchAlerts