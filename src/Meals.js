import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Meals = () =>{
    const [meal_data, setMealData] = useState([])
    const [ search_string, setSearchString] = useState("")
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_string}`
    useEffect(()=>{
        axios.get(url)
        .then(res =>{
            console.log(res.data)
            if (res.data &&res.data.meals){
                setMealData(res.data.meals)
            }
        })
    },[search_string])
    const handleSearch = (e)=>{
        setSearchString(e.target.value)
    }
    return(
        <div>

            <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                <input className='form-control my-3 ' placeholder='search by name' onChange={(e)=>{handleSearch(e)}} />
                </div>
            </div>
                <div className='row'>
                    {
                        meal_data.length>0 &&
                        meal_data.map((data, index)=>{
                            return(
                                <div className='col-sm-3 my-3' key={index}>
                                    <a href={data.strSource} target="_blank">
                                    <div className='img-container'>
                                        <img src={data.strMealThumb} className="meal-img" />
                                    </div>
                                    </a>
                                    <div className='text-container'>
                                    <div>
                                        <strong>{data.strArea}</strong>
                                        <strong  className='m-3'>{data.strCategory}</strong>
                                    </div>
                                    <div className='meal-instruct'> {data.strInstructions}</div>
                                </div>
                                </div>
                            )
                        })
                    }
                {/* {
                    setMealData.length>0 &&
                    setMealData.map((data, index)=>{
                        return(
                            <div className='col-sm-3' key={index}>
                                <div className='img-container'>
                                    <img src={data.strMealThumb} />
                                </div>
                                <div className='text-container'>
                                    <div>
                                        <strong>{data.strArea}</strong>
                                        <strong>{data.strCategory}</strong>
                                    </div>
                                    <div> {data.strInstructions}<div>
                                </div>

                            </div>
                            </div>
                        )
                    })
                } */}
                </div>
            </div>

        </div>
    )
}

export default Meals;