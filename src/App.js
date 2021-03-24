import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'



//chemin 
import Actualite from './components/actualite/actualite'
import Groupes from './components/groupes/groupes'
import GroupesPage from './components/groupes/groupesPage'
import Profil from './components/profil/profil'
import Inscription from './components/log/inscription'
import Forgetpass from './components/log/forgetpass'

//import AuthRoute from './util/AuthRoute'

//css 
import "tailwindcss/tailwind.css";
import './App.css';

//pour que lutilisateur cooencté ne peut pas sz direger vers la page connexion/inscription 
//import jwtDecode from "jwt-decode";

/*let authenticated;
const token = localStorage.FBIdToken;

if (token) {

  const decodedToken = jwtDecode(token);
  console.log(decodedToken);

  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/inscription'
    authenticated = false

  } else { authenticated = true }

}*/



function App() {
  return (
   
    <div className='App'>
       
      <BrowserRouter>
        <Switch>
          <Route path='/groupes' component={Groupes} />
          <Route path='/' exact component={Actualite} />
        
          <Route path='/profil' exact component={Profil} />
          <Route path='/inscription' exact component={Inscription}  />
          <Route path='/forget' exact component={Forgetpass} />


          <Route path='/groupesPage' component={GroupesPage} />
        </Switch>
      </BrowserRouter>

      
    </div>
    
  );
}

export default App;
