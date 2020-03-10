import {HANDEL_CHANGE,
    SEARCH_RATING,DELETE_MOVIE,EDIT_MOVIE,ADD_MOVIE,HANDEL_ROUTER
} from './typeaction'
export const handelchange =e=>({
    type:HANDEL_CHANGE,
    e 
})
export const searchrating=i=>({
    type:SEARCH_RATING,
    i
})
export const deletemovie=id=>({
    type:DELETE_MOVIE,
    id
})
export const editmovie=payload=>({
    type:EDIT_MOVIE,
    payload
})
export const addmovie =payload=>({
    type:ADD_MOVIE,
    payload
})
export const handelrouter=lien=>({
type:HANDEL_ROUTER,
lien
})