import React, { useState } from 'react'

function RepoForm(props) {
  const { isSubmitting, onSubmit, onGitHubUserChange } = props

  const [gitHubUser, setGitHubUser] = useState()

  return (
    <div className="RepoForm">
      <input className='repo-input' placeholder='Enter GitHub User Here' onChange={(e) => setGitHubUser(e.currentTarget.value)}/>
      <br />
      <SubmitButton isSubmitting={isSubmitting} onSubmit={() => onSubmit(gitHubUser)}/>
    </div>
  );
}

function SubmitButton(props){
  const { isSubmitting, onSubmit } = props

  let classNames = 'repo-fetch-btn'
  let text = 'Find Popular Repos'

  if(isSubmitting) {
    classNames += ' btn-loading'
    text = 'Fetching'
  }


  return (
    <button type="button" className={classNames} onClick={onSubmit}>
      <span>{ text }</span>
    </button>
  )
}

export default RepoForm;
