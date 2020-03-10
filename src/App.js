import React from 'react';
import { connect } from 'react-redux'
import {handelrouter} from './js/actions/creactactions'
import './App.css';
import Search from './components/searchmovie'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trailer from './components/trailer'
function App(props) {
  return (
    <div className="App">
  <Router>
   <Switch>
            <Route exact path="/" component={Search} />
            <Route
           
            path={`/${props.titlemovie.replace(/ /g, "_")}`}
           
              render={() => (
                <Trailer
                linktrailer={props.linktrailer}/>
              )}
            />
          </Switch>
          </Router>
    </div>
  );
}
const mapStateToProps =state =>
({
  
  linktrailer:state.linktrailer,
    titlemovie:state.titlemovie
})
// const mapDispatchToProps=dispatch=>
// {
//     return {
        
// }}
// const mapDispatchToProps=dispatch=>
// {
//     return {
//       handelrouter:lien=>{
//             dispatch(handelrouter(lien));
//         }
//     }
// }
export default connect (mapStateToProps)(App)
