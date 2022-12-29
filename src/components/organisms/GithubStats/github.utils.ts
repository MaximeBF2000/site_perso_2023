const BASE_API_URL = 'https://api.github.com/'

const githubFetchOptions = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`
  }
}

const getNumbersOfCommitsByRepo = async (repositoryName: string) => {
  const apiUrl = `https://api.github.com/repos/${repositoryName}/commits`
  const commits = await fetch(apiUrl, githubFetchOptions).then(r => r.json())

  return (commits?.length || 0) as number
}

export const getTotalNumberOfCommits = async (repositories: any[] = []) => {
  const commitsByRepo = await Promise.all(
    repositories.map(repo => getNumbersOfCommitsByRepo(repo.full_name))
  )

  return commitsByRepo.reduce((acc, n) => acc + n, 0)
}

export const getRepos = async () => {
  const endpoint = BASE_API_URL + 'users/MaximeBF2000/repos'
  const repos = await fetch(endpoint, githubFetchOptions).then(r => r.json())

  return repos as object[]
}

const getCodeLinesByRepo = async (repositoryName: string) => {
  const endpoint = BASE_API_URL + `repos/${repositoryName}/stats/code_frequency`
  const modificationsByRepo = await fetch(endpoint, githubFetchOptions).then(
    r => r.json()
  )

  let lines = 0
  if (Array.isArray(modificationsByRepo))
    modificationsByRepo.forEach(
      ([additions, deletions]) => (lines += additions - deletions)
    )

  return lines
}

export const getCodeLines = async (repositories: any[] = []) => {
  const linesByRepo = await Promise.all(
    repositories.map(repo => getCodeLinesByRepo(repo.full_name))
  )

  return linesByRepo.reduce((acc, n) => acc + n, 0)
}
