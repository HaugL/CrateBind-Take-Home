function RepoForm(props) {
  const { isSubmitting } = props

  return (
    <div className="RepoForm">
      <input className='repo-input' placeholder='Enter GitHub User Here'/>
      <br />
      <SubmitButton isSubmitting={isSubmitting}/>

    </div>
  );
}

function SubmitButton(props){
  const { isSubmitting } = props

  let classNames = 'repo-fetch-btn'
  let text = 'Find Popular Repos'

  if(isSubmitting) {
    classNames += ' btn-loading'
    text = 'Fetching'
  }


  return (
    <button type="button" className={classNames}>
      <span>{ text }</span>
    </button>
  )
}

export default RepoForm;
