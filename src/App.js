import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/contact/Contact';
import EditContact from './component/contact/EditContact';
import ViewContact from './component/contact/ViewContact';
import About from './component/About';
import Inf from './component/Inf';
import Blog from './component/Blog';
import Login from './component/Login';
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import ViewUser from './component/users/ViewUser'
import "../node_modules/bootstrap/dist/css/bootstrap.css"







function App() {
  return (
    <div className="background">

      <div className="App">
    
     


       
        <BrowserRouter>
          <div className="container">
            <Switch>

               <Route  exact path="/"  component={Login} />
              <Route  exact path="/home"  component={Home} />
              <Route exact path="/contact"  component={Contact} />
              <Route exact path="/editcontact/:id"  component={EditContact} />
              <Route exact path="/viewcontact/:id"  component={ViewContact} />
              <Route exact path="/about"  component={About} />
              <Route exact path="/blog"  component={Blog} />
              <Route  exact path="/logout"  component={Login} />
              <Route  exact path="/adduser"  component={AddUser} />
              <Route  exact path="/edituser/:id"  component={EditUser} />
              <Route  exact path="/viewuser/:id"  component={ViewUser} />
              <Route  exact path="/inf"  component={Inf} />
             
            </Switch>
          </div> 
        </BrowserRouter>
        


      </div>

    </div>




  );



};

export default App;
