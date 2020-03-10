import React, { Component } from 'react'
import { connect } from 'react-redux'
import Etoile from './showstars'
import {deletemovie,handelrouter} from '../js/actions/creactactions'
import Edit from './editmodal'
import { Link } from 'react-router-dom'



class displaycard extends Component {
  
    render() {
        return (
            <div className='cards'>
                
               {
                        this.props.movieliste.filter(el =>
                            el.title.toLowerCase().includes(this.props.searchvalue)).map((er, i) => 
                            <ul key={i} className="card">
                               
                            <li><img src={er.lien} alt='logo' width='230px' height='300px' /></li>
                            <h3 className='title'>{er.title}</h3>
                            <div className="stars"><Etoile count={er.rating} /></div>
                            <button className="buttdescription butt" onClick={()=>{this.props.handelrouter({title:er.title, trailer:er.trailer})}}>
                                <Link to={{pathname:'/' + er.title.replace(/ /g, "_")}}>Movie Description</Link></button>
                                
                            <div className='option'>
                            <Edit id={er.id}/>
                            {/* <button className='buttoption butt' >Edit</button> */}
                            <button className='buttoption butt' onClick={()=>this.props.deletemovie(er.id)}>Remove</button>
                            </div>
                            </ul>)
                    }

            </div>
        )
    }
}

const mapStateToProps = state=>({
    movieliste:state.movieliste,
    listesearch:state.listesearch,
    searchvalue:state.searchvalue,
 
})
const mapDispatchToProps =dispatch=>{
    return {
        deletemovie:(id)=>{
            dispatch(deletemovie(id))
        }
        ,
        handelrouter:lien=>{
          dispatch(handelrouter(lien))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (displaycard)


