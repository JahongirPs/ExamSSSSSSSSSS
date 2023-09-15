import React, { useEffect, useState } from 'react'
import Nav from '../../componets/navbar/Navbar'
import "../More/More.scss"

const More = () => {

    const [isMove, setMove] = useState(null)

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/watch/providers/movie",{ 
            headers:{
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
        }})
        .then(responseMove => responseMove.json())
        .then(dataMove => setMove(dataMove?.results))
    },[])
  return (
    <>
        <Nav/>
    <div className='logomain'>
        <div className='logopath'>
             <div className="logo">
                 {
                    isMove?.map(logo => 
                      <img style={{width:"100px", height:"100px"}} src={"https://image.tmdb.org/t/p/original/"+logo?.logo_path} alt="" />    
                    )
                 }
             </div>
        </div>
    </div>
    </>
 
  )
}

export default More