import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CallApi } from './../../Context/CallApiContext';
import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import './GetDetailsMeals.scss';


export default function GetDetailsMeals() {
    let {MealsId,setMealsId,GetMealDetailsById} = useContext(CallApi);
    const [first, setfirst] = useState(null)
    let {id}=useParams()
    setMealsId(id)
    async function CallGetMealDetailsById(e) {
        let x = await GetMealDetailsById(e);
        setfirst(x.data.meals[0])        
      }
      function GoLinkYoutube() {
        open(`${first.strYoutube}`)
      }
      function GoLinkSource() {
        open(`${first.strSource}`)
      }
         useEffect(() => {
            CallGetMealDetailsById(id);
            }, []);
      
  return (<>
  {first == null? 'Loading...':null}
  <h1 className=''>{first?.strMeal}</h1>
  <div className=' lg:flex w-[100%] '>
    <div>
        <img src={first?.strMealThumb} className='lg:w-[100%] w-[80%] rounded-3xl' alt="" />
        <div className='flex p'>
        <button type="button" onClick={GoLinkYoutube} className="focus:outline-none text-white bg-[#e92020] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm l "><i className="fa-brands fa-youtube "></i>Youtube</button>
        <button type="button" onClick={GoLinkSource} className="focus:outline-none text-white bg-[#1ace1a] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm l "><i className="fa-solid fa-globe"></i>Source</button>
        </div>

        </div>
    <div className='lg:w-[60%] p'>{first?.strInstructions}</div>
    <div className='lg:w-[50%] bg-white rounded-2xl h-fit p'>
        <div className='text-black p-2.5 text-3xl border-b-4 border-b-[#f1f1f1]  h-[50px]'>Ingredients</div>
        <div className='pt'>
        {first?.strIngredient1 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient1}:</div>
            <div className='styy'>{first?.strMeasure1}</div>
        </div>}
        {first?.strIngredient2 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient2}:</div>
            <div className='styy'>{first?.strMeasure2}</div>
        </div>}
        {first?.strIngredient3 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient3}:</div>
            <div className='styy'>{first?.strMeasure3}</div>
        </div>}
        {first?.strIngredient4 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient4}:</div>
            <div className='styy'>{first?.strMeasure4}</div>
        </div>}
        {first?.strIngredient5 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient5}:</div>
            <div className='styy'>{first?.strMeasure5}</div>
        </div>}
        {first?.strIngredient6 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient6}:</div>
            <div className='styy'>{first?.strMeasure6}</div>
        </div>}
        {first?.strIngredient7 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient7}:</div>
            <div className='styy'>{first?.strMeasure7}</div>
        </div>}
        {first?.strIngredient8 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient8}:</div>
            <div className='styy'>{first?.strMeasure8}</div>
        </div>}
        {first?.strIngredient10 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient10}:</div>
            <div className='styy'>{first?.strMeasure10}</div>
        </div>}
        {first?.strIngredient11 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient11}:</div>
            <div className='styy'>{first?.strMeasure11}</div>
        </div>}
        {first?.strIngredient12 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient12}:</div>
            <div className='styy'>{first?.strMeasure12}</div>
        </div>}
        {first?.strIngredient13 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient13}:</div>
            <div className='styy'>{first?.strMeasure13}</div>
        </div>}
        {first?.strIngredient14 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient14}:</div>
            <div className='styy'>{first?.strMeasure14}</div>
        </div>}
        {first?.strIngredient15 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient15}:</div>
            <div className='styy'>{first?.strMeasure15}</div>
        </div>}
        {first?.strIngredient16 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient16}:</div>
            <div className='styy'>{first?.strMeasure16}</div>
        </div>}
        {first?.strIngredient17 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient17}:</div>
            <div className='styy'>{first?.strMeasure17}</div>
        </div>}
        {first?.strIngredient18 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient18}:</div>
            <div className='styy'>{first?.strMeasure18}</div>
        </div>}
        {first?.strIngredient19 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient19}:</div>
            <div className='styy'>{first?.strMeasure19}</div>
        </div>}
        {first?.strIngredient20 == ''? null:
        <div className='text-black font-sans  border-b-4 border-b-[#f1f1f1] flex justify-between  h-[50px]'>
            <div className='styy'>{first?.strIngredient20}:</div>
            <div className='styy'>{first?.strMeasure20}</div>
        </div>}
        
        </div>
    </div>
  </div>
  
  </>  )
}