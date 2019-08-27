const fetchAlerts = props => {
  return fetch(`http://localhost:5000/api/alerts`)
    .then(res => res.json())
}

export default fetchAlerts