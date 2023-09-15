import React, { useEffect, useState } from 'react'
import Netflix from "../../assets/img/Netflix.png"
import "./Navs.scss"
import { Link } from 'react-router-dom'

const Nav = () => {

    const [countrsItems , setCounterisItems] = useState([])

    useEffect(()=>{
       fetch("https://api.themoviedb.org/3/watch/providers/regions",{
        headers:{
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjQyNzUwZDRjYjIyN2MyODAxYTk4Y2VjOTQyMDM0NSIsInN1YiI6IjY1MDJmMGQxZTBjYTdmMDEwZGViMjFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CfDnPaaA0qDHyU6ib2Das3AcBvdEBtxkSSmMBfXi-Q"
        }
       })
       .then(response => response.json())
       .then(data => setCounterisItems(data?.results))
    },[])


  return (
    <div className='nav__main'>
        <div className="nav__block">
        <div className="nav__logo">
             <img src={Netflix} alt="" />
        </div>
        <ul>
            <div to={"/"}><li>HOME</li></div>
            <div  to="/move"><li>TV-SHOWS</li></div>
            <div><li>MOVIES</li></div>
            <div> <li>NEW</li></div>
            <div><li>POPULAR</li></div>
        </ul>
        </div>
        <div className="nav__countris">
            <div className="select__block">
                <span className='country__text'>COUNTRIES</span>
            <select>
                 {countrsItems?.map(itemsCounter => 
                    <option key={itemsCounter?.id}>{itemsCounter?.native_name}</option>
                )}
             </select>
            </div>
         <div>
            <input type="text" placeholder='Search' className='awfawfa'/>
         </div>
        </div>
    </div>
  )
}

export default Nav