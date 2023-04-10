import React, { useState } from 'react'
import RepoForm from './components/RepoForm'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)


  return (
    <div className="App">
      <RepoForm isSubmitting={isSubmitting}/>
    </div>
  );
}

export default App;
