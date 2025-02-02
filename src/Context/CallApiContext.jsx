import { createContext, useState } from "react";
import axios from "axios";

export let CallApi = createContext();

export default function CallApiProvider(props) {
  const [AllMeals, setAllMeals] = useState(null);
  const [MealsId, setMealsId] = useState(null)
  async function GetAllCategories() {
    let AllCategories = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    return AllCategories;
  }
  async function GetAllMeals() {
      let AllMeals = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      setMealsId(AllMeals.data.meals.idMeal)
      return AllMeals
    }
  async function GetMealsByCategories(e) {
      let MealsByCategories = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`)
      setMealsId(MealsByCategories.data.meals.idMeal)
      return MealsByCategories
    }
  async function GetMealDetailsById(e) {
      let MealDetailsById = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`)
      setMealsId(MealDetailsById.data.meals.idMeal)
      return MealDetailsById
    }
  return (
    <CallApi.Provider value={{ GetAllCategories,GetAllMeals,GetMealsByCategories,AllMeals,setAllMeals,MealsId,setMealsId,GetMealDetailsById }}>
      {props.children}
    </CallApi.Provider>
  );
}
