import React, { useState } from 'react'
import RepoForm from './components/RepoForm'
import RepoList from './components/RepoList'
import { fetchPopularUserNonForkedRepo } from './utils/services/github_service'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [repos, setRepos] = useState()
  const [submittedGitHubUser, setSubmittedGitHubUser] = useState()
  const [errorMessage, setErrorMessage] = useState()

  async function requestUserRepos(gitHubUser) {
    setIsSubmitting(true)
    const {repos, error} = await fetchPopularUserNonForkedRepo(gitHubUser)
    setIsSubmitting(false)
    setSubmittedGitHubUser(gitHubUser)
    setErrorMessage(error)
    setRepos(repos)
  }

  return (
    <div className="App">
      <RepoForm isSubmitting={isSubmitting} onSubmit={requestUserRepos}/>
      <RepoList repos={repos} gitHubUser={submittedGitHubUser} errorMessage={errorMessage}/>
    </div>
  );
}

export default App;
