import React, { useState } from 'react'

function RepoForm(props) {
  const { isSubmitting, onSubmit } = props

  const [gitHubUser, setGitHubUser] = useState()

  const errorState = gitHubUser === ''
  const buttonDisabled = !gitHubUser || errorState
  const errorSpan = errorState ? (<React.Fragment><br /><span className="input-error-label">This field is required</span></React.Fragment>) : null
  return (
    <div className="RepoForm">
      <input className={`repo-input ${errorState ? 'input-error' : ''}`} placeholder='Enter GitHub User Here' onChange={(e) => setGitHubUser(e.currentTarget.value)}/>
      { errorSpan }
      <br />
      <SubmitButton isSubmitting={isSubmitting} onSubmit={() => onSubmit(gitHubUser)} buttonDisabled={buttonDisabled}/>
    </div>
  );
}

function SubmitButton(props){
  const { buttonDisabled, isSubmitting, onSubmit } = props

  let classNames = 'repo-fetch-btn'
  let text = 'Find Popular Repos'

  if(isSubmitting) {
    classNames += ' btn-loading'
    text = 'Fetching'
  }


  return (
    <button type="button" className={classNames} onClick={onSubmit} disabled={buttonDisabled}>
      <span>{ text }</span>
    </button>
  )
}

export default RepoForm;
