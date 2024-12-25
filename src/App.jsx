
import React from 'react'
import conf from './conf/conf';
import authService from './appwrite/auth';
import SignUp from './components/SignUp';
function App() {
  console.log(conf.appwriteUrl);
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  
  
 

  
  
 




 
 
  
  
  return (
 <>
  <SignUp></SignUp>
 </>
  )
}

export default App
