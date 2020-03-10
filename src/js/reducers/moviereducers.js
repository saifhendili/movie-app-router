import {HANDEL_CHANGE,SEARCH_RATING,DELETE_MOVIE,EDIT_MOVIE,ADD_MOVIE,HANDEL_ROUTER} from '../actions/typeaction'
const stateliste={
    movieliste:[

        {
            title:"the 100",
            rating:"",
            lien:'https://static.next-episode.net/tv-shows-images/huge/the-100.jpg'    ,
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/ia1Fbg96vL0'
        },
        {
            title:"sow1",
            rating:"1",
            lien:'https://media.senscritique.com/media/000005201689/source_big/Saw.jpg'    ,
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/tgbNymZ7vqY'
        },
        {
            title:"final destination",
            rating:"4",
            lien:'https://images-na.ssl-images-amazon.com/images/I/51fES0GGZxL.jpg'    ,
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/PI87-0g_SI8'
        },
        {
            title:"Annabelle",
            rating:"1",
            lien:'https://upload.wikimedia.org/wikipedia/en/9/90/Annabelle_film_poster.jpg'    ,
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/paFgQNPGlsg'
        },
        {
            title:"wayward pines",
            rating:"5",
            lien:'https://fr.web.img3.acsta.net/pictures/16/04/25/14/39/292953.jpg'    ,
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/RsQ9Fl0VCkk'
        }
        , {
            title:"game of throness",
            rating:"5",
            lien:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SY1000_CR0,0,734,1000_AL_.jpg',
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/rlR4PJn8b8I'
        }
        , {
            title:"the flash 1",
            rating:"3",
            lien:'https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/10/flash-header.jpg',
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/lJO7HBe8YmM'
        }
        , {
            title:"arrow 1",
            rating:"3",
            lien:'https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_.jpg',
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/hTv13EjlLNg'
        }
        , {
            title:"the witcher",
            rating:"2",
            lien:'https://www.gstatic.com/tv/thumb/tvbanners/17580215/p17580215_b_v8_ac.jpg',
            id:Math.random(),
            trailer:'https://www.youtube.com/embed/ndl1W4ltcmg'
        }
    ],
    linktrailer:'',
    titlemovie:'',
    listesearch:[],
    searchvalue:'',
    etoile: ["☆", "☆", "☆", "☆", "☆"],
    indexet:''
}
const reducer= (state=stateliste,action)=>{
    switch(action.type)
    {
        case HANDEL_CHANGE :  
 return  {...state ,searchvalue:action.e.target.value}
     case SEARCH_RATING:
     return{...state,indexet:action.i+1}
     case DELETE_MOVIE:
      
     return{...state ,movieliste:state.movieliste.filter(el=>el.id!==action.id)}
     case EDIT_MOVIE:
        return {
            ...state,
            movieliste: state.movieliste.map((el) =>
              el.id === action.payload.id ? { ...el, ...action.payload.newMovie } : el
            )
          };
    case ADD_MOVIE:
        return {
            ...state, movieliste:state.movieliste.concat(action.payload)
        }
        case HANDEL_ROUTER:return{...state ,titlemovie:action.lien.title, linktrailer:action.lien.trailer}
    }
  
   return state
}
export default reducer