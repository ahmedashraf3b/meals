import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CallApi } from "./../../Context/CallApiContext";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link, useNavigate, useParams } from "react-router-dom";



export default function GetMeals() {
    let { GetAllCategories, GetAllMeals,AllMeals,setAllMeals } = useContext(CallApi);
    
    
      async function Get() {
        let x = await GetAllMeals();
        setAllMeals(x.data.meals);
      }
      
      useEffect(() => {
        Get();
      }, []);


  return (
    <>
    {AllMeals == null? (
        <p>Loading...</p>
      ): AllMeals.map((res)=>(
            <div key={res.idMeal} className="bg-white styling hover:shadow-2xl rounded-4xl mj relative lg:h-[300px]">
            <img
              className="imge "
              src={res.strMealThumb}
              alt="img"
            />
            <div className="data text-center  h-[100%]">
              <h1 className="size"> {res.strMeal}</h1>
              <p className="text-emerald-400 "><i className="fa-solid fa-earth-europe"></i>{res.strArea}</p>
              <Link to={`/GetDetailsMeals/${res.idMeal}/`}><button  type="button" className="text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm  text-center l">View Ricepe</button></Link>
            </div>
          </div>))}
    </>
  )
}
