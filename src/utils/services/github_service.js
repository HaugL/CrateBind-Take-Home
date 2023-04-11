export async function fetchPopularUserNonForkedRepo(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
    let jsonData;
  try {
    jsonData = await response.json();
  } catch (error) {
    jsonData = []
  }

  if(response.status === 200){
    const repos = jsonData
                .filter((repo) => !repo.fork )
                .sort((a,b) => b.stargazers_count - a.stargazers_count)
                .map((repo) => filterUnusedFields(repo))
    return { repos }
  } else if(response.status === 404) {
    return { error: 'That GitHub User Does Not Exist', repos: [] }
  } else {
    return { error: 'Uh Oh! Something Went Wrong. Please Try Again', repos: [] }
  }
}

// Lower amount of data stored in local state by removing unused fields
function filterUnusedFields(repo) {
  const strippedRepo = {}
  const fields = ['stargazers_count','language', 'description', 'name', 'id']
  fields.forEach((field) => {
    strippedRepo[field] = repo[field]
  })

  return strippedRepo
}
