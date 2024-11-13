import RestCard from "./RestCard";
import {restaurants} from "../utils/testData";
import React, { useState } from 'react';
console.log(restaurants)

const Body = () => {
    const [restaurantsList,setrestaurantsList]= useState(restaurants)

    return (
        <div className="mainBody">
            <div className="searchContainer">
                <div className="searchBar">
                    <input type="text" className="searchValue" placeholder="Search for restaurants and food"  ></input>
                    <button id="searchButton"  onClick={()=>{
                        let topRestaurents=restaurants.filter((res)=> res.info.avgRating > 4.5)
                        setrestaurantsList(topRestaurents)
                    }}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {restaurantsList.map((res) => 
                        <RestCard key ={res.info.id} resData={res.info}/>
                    )
                }

            </div>

        </div>
    )
}
export default Body