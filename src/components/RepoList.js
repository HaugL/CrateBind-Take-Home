import starIcon from '../assets/images/star-pink.svg'

function RepoList(props) {
  const { repos, gitHubUser } = props

  let titleText
  if(repos == null || repos === undefined) {
    titleText = <h2>Enter A User To See Most Starred Repos</h2>
  } else if(repos.length > 0){
    titleText = <h2>Most Starred Repos for {gitHubUser}</h2>
  } else {
    titleText = <h2 data-testid='no-repos'>Could not find any repos for {gitHubUser}. Please enter another GitHub username</h2>
  }

  return (
    <div className="RepoList" data-testid='repo-list'>
      { titleText }
      { (repos || []).map((repo) => <Repo repo={repo} key={repo.id}/>) }
    </div>
  );
}


function Repo(props) {
  const { repo } = props
  return (
    <div className="Repo" data-testid='repo-item'>
      <div className="repo-header">
        <div className='repo-title'>{repo.name}</div>
      </div>
      <div className="repo-body">
        <div className="repo-stars repo-title">
          <img src={starIcon} alt='star icon'/>
          {repo.stargazers_count || 0}
        </div>
        <div className={`repo-description repo-wording ${!repo.description ? 'missing' : ''} `}>{repo.description || 'No Description'}</div>
        <div className="repo-language repo-title">Language: <span className={repo.language ? 'highlighted' : 'missing'}>{repo.language || 'None'}</span></div>
      </div>
    </div>
  );
}

export default RepoList;
