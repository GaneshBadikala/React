import RestCard from "./RestCard";
import { restaurants } from "../utils/testData";
import React, { useState, useEffect } from 'react';
console.log(restaurants)

const Body = () => {
    const [restaurantsList, setrestaurantsList] = useState(restaurants)
    const [searchValue, setsearchValue] = useState("")
    useEffect(()=>{
        let topRestaurents = restaurants.filter((res) =>res.info.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        setrestaurantsList(topRestaurents)
    },[searchValue])

    return (
        <div className="mainBody">
            <div className="searchContainer">
                <div className="searchBar">
                <input 
                        type="text" 
                        className="searchValue" 
                        placeholder="Search for restaurants and food"

                        onChange={(e) => setsearchValue(e.target.value)} // Update searchValue on change
                    />
                    <button id="searchButton" >Search</button>
                </div>
            </div>
            <div className="res-container">
                {restaurantsList.map((res) =>
                    <RestCard key={res.info.id} resData={res.info} />
                )
                }

            </div>

        </div>
    )
}
export default Body