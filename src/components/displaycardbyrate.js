import React, { Component, Fragment} from 'react'
// import { movielist } from "../data"
import Etoile from './showstars'
import '../App.css'
import { connect } from 'react-redux'
import Edit from './editmodal'
import {deletemovie,handelrouter} from '../js/actions/creactactions'
import { Link } from 'react-router-dom'

class displaycardbyrate extends Component {
    render() {
        return (
            <div className='cards'> 
                    


{this.props.movieliste.filter(el => el.rating >= this.props.indexet).map((el, i) =>
   <ul key={i} className="card">
     <li><img src={el.lien} alt='logo' width='230px' height='300px' /></li>
     <h3 className='title'>{el.title}</h3>

     <div className="stars">
         <Etoile count={el.rating} /></div>
         <button className="buttdescription butt" onClick={()=>{this.props.handelrouter({title:el.title, trailer:el.trailer})}}>
              <Link to={{pathname:'/' + el.title.replace(/ /g, "_")}}>Movie Description</Link></button>
     <div className='option'>
     <Edit id={el.id}/>
 <button className='buttoption butt' onClick={()=>this.props.deletemovie(el.id)}>Remove</button>
                            </div>
                            </ul>)
}

            </div>
        
        )
    }
}

const mSTP= state =>({
    movieliste:state.movieliste,
    listesearch:state.listesearch,
    searchvalue:state.searchvalue,
    etoile:state.etoile,
    indexet:state.indexet,
    trailer:state.trailer
})
const mDTP=dispatch=>{
    return{
        deletemovie:id=>{
            dispatch(deletemovie(id))
        } ,
        handelrouter:(lien)=>{
          dispatch(handelrouter(lien))
        }
    }
}
export default connect (mSTP,mDTP)(displaycardbyrate)