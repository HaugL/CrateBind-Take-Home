export async function fetchPopularUserNonForkedRepo(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const jsonData = await response.json();

  return jsonData
          .filter((repo) => !repo.fork )
          .sort((a,b) => b.stargazers_count - a.stargazers_count)
          .map((repo) => filterUnusedFields(repo))
}

// Lower amount of data stored in local state by removing unused fields
function filterUnusedFields(repo) {
  const strippedRepo = {}
  const fields = ['stargazers_count','language', 'description', 'name']
  fields.forEach((field) => {
    strippedRepo[field] = repo[field]
  })

  return strippedRepo
}
