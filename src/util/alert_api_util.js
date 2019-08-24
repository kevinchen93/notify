const fetchAlerts = props => {
  return fetch(`api/alerts`)
    .then(res => {
      console.log('RES', res)
      return res.json()
    })
}

export default fetchAlerts