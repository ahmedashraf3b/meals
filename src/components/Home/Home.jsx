import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { CallApi } from "./../../Context/CallApiContext";
import GetMeals from "../GetMeals/GetMeals";
import LOGO from './../../assets/LOGO1.png';


export default function Home() {
  const [AllCategories, setAllCategories] = useState();
  const [Active, setActive] = useState()
  let { GetAllCategories,GetMealsByCategories,AllMeals,setAllMeals,GetAllMeals,MealsId } = useContext(CallApi);
// console.log(MealsId);

  async function OnclickButton(e) {
    setActive(e)
      let x = await GetMealsByCategories(e)
      console.log(x.data.meals);
      setAllMeals(x.data.meals)
  }
  async function Get(e) {
    setActive(e)
    let { data } = await GetAllCategories();
    setAllCategories(data.categories);
  }
  async function Let(e) {
    setActive(e)
    let x = await GetAllMeals();
    setAllMeals(x.data.meals);
  }
  
  
  useEffect(() => {
    Get('All');
  }, []);
  return (
    <>
      <h1 className="styleOne">Learn, Cook, Eat Your Food</h1>
      <div className="border-b-2 border-b-[#d5cfcf]">
        <button
        onClick={()=>Let('All')}
          type="button"
          className={Active == 'All'?"bsm text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 active":
            "bsm text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          }
        >
          All
        </button>
        {AllCategories?.map((res) => (
          <button
          onClick={()=>OnclickButton(res.strCategory)}
            type="button"
            key={res.idCategory}
            className={Active == res.strCategory?"bsm shadow text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 active":
              "bsm shadow text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 "
            }
          >
            {res.strCategory}
          </button>
        ))}
      </div>
      <div className="container m">
        <div className="row grid  lg:grid-cols-4 gap-9 ">
          <GetMeals/>
        </div>
      </div>
    </>
  );
}
