import React from 'react'
import { useEffect, useState } from 'react'
import "./../banner/Banners.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import {BsFillPlayFill} from "react-icons/bs"

export const Banner = () => {

    const [bannerImg , setBannerImg] = useState([])

    useEffect(()=>{
       fetch("https://api.themoviedb.org/3/movie/top_rated?&with_networks=213",{
        headers:{
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1MDA3NGM3ZmQ5MjFmMjUzMWYwODVkYzk1OGFkMiIsInN1YiI6IjY1MDE5ZTY5ZGI0ZWQ2MTAzM2EyOWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gb8j1OJbXSKd9oPmeQlOy8I6SMGzm1nDTlY5SXtR4No"
        }
       })
       .then(response => response.json())
       .then(data => setBannerImg(data?.results))
    },[])

console.log(bannerImg);

    return (

           <div className="banner">
           <Swiper
              key={bannerImg?.id}
              autoplay={{delay: 2500}}
              loop={true}
              modules={[Autoplay ]}
             className="mySwiper"
             
           >
              {bannerImg?.map(imgBanner=> 
                 <div>
                
                 <SwiperSlide>
                     <div className="title-img">
                     <h2>{imgBanner?.title}</h2>
                       <img src={  "https://image.tmdb.org/t/p/original/" + imgBanner?.backdrop_path} alt="" />
                      <div className="btn">
                        <button className='btn__play'> <BsFillPlayFill/> Play</button>
                        <button className='btn__more'>More Info</button>
                      </div>
                     </div>
                </SwiperSlide>
                 </div> 
               )}
          </Swiper>
           </div>

  )
}
