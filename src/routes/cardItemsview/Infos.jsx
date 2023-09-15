import "../cardItemsview/moreInfos.scss"
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState } from 'react'
import Star from "../../assets/img/Star.png"
import CardCarusel from "../../componets/caruosle/Carousel"
import Nav from "../../componets/navbar/Navbar"


const CardView = () => {

    let idImg = useParams()

    const [ isView , setView] = useState(null)

    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${idImg?.id}`,{
        headers:{
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
        }
      })
      .then(responseID => responseID.json())
      .then(dataID => setView(dataID))
    },[idImg?.id])

    console.log(isView);

  return (
    <div className='main__view'>
        <Nav/>
       <div className="view">
       <div className="img__cardView">
             <img className="imgs"  src={"https://image.tmdb.org/t/p/original/"+ isView?.backdrop_path} alt="" />
        </div>
         <div className="title">
             <h1 className="title_cards">{isView?.title}</h1>
             <p className="over__cards">{isView?.overview}</p>
         </div>
         <div className="reputatu__date">
             <div className="reputate">
                 <span className="reputaes__card"><img className="img__star" style={{width:"48px", height:"48px"}} src={Star} alt="" />{isView?.vote_average}</span>
             </div>
             <div className="data">
                 <p className="relese_data-card">chiqarilgan sana: {isView?.release_date}</p>
             </div>
             <strong>{isView?.vote_count} kishi ovoz bergan</strong>
         </div>
       </div>
       <div className="carusel">
        <CardCarusel/>
       </div>
    </div>
  )
}

export default CardView