import parseMarkdown from '../util/parseMarkdown'

const API = 'https://api.github.com/gists/86ad06a3774e548d2468b740cb8b0eeb'

const fetchAlerts = () => {
  return fetch(API)
            .then(res => {
              return res.json()
            })
            .then(markdown => {
              return parseMarkdown(markdown.files["changelog.md"].content)
            })
}

export default fetchAlerts