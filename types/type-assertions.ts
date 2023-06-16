const site: unknown = 'https://google.com'
const favoriteSites: string[] = []

favoriteSites.push(site as string)
favoriteSites.push(<string>site)
