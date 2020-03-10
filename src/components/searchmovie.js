import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handelchange,searchrating} from '../js/actions/creactactions'
import '../App.css'
import Card from './displaycard'
import Carbbyrating from './displaycardbyrate'
import Form from './modalforadd'
import Start from './searchstars'
class searchmovie extends Component {
    render() {
        return (
            <div>
                <div className='header'>
              {  this.props.etoile.map((el, i) => 
                <p  key={i}className="search-etoile"onClick={() => this.props.searchrating(i)}>
                  {this.props.indexet === "" ? 
                    "☆" : <Start index={i} count={this.props.indexet} star={this.props.etoile[i]}/>
                  }</p> ) } <input className="input" placeholder='Search for movie !!!' onChange={e=>this.props.handelchange(e)}/> 
                   </div> <div  className="container">
                  <div>
                        {this.props.indexet === "" ?  <Card />   : <Carbbyrating /> 
                        }
          </div>
          <div class="addbutton1">  
         <Form />
         <h3 className='title'>Add Movie</h3>
         </div>
                </div>    
            </div>
        )}  }
const mapStateToProps =state =>
({
    movieliste:state.movieliste,
    listesearch:state.listesearch,
    searchvalue:state.searchvalue,
    etoile:state.etoile,
    indexet:state.indexet
})
const mapDispatchToProps=dispatch=>
{
    return {
        handelchange:event=>{
            dispatch(handelchange(event));
        },
        
    
        searchrating:i=>{
            dispatch(searchrating(i))
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(searchmovie)