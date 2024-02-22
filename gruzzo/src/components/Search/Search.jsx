import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
const Search = () => {
    return (
        <div className='search container section'>
            <div className="sectionContainer grid">
                <div className="btns flex">
                    <div className="singleBtn">
                        <span>Economy</span>
                    </div>

                    <div className="singleBtn">
                        <span>Buisness Class</span>
                    </div>

                    <div className="singleBtn">
                        <span>First Class</span>
                    </div>

                </div>
                <div className="searchInputs flex">
                    <div className="singleInput flex">
                        <div className = "iconDiv">
                        <GrMapLocation className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type ="text" placeholder='Where do you want to go'/>
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className = "iconDiv">
                        <MdAccountCircle className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Travel</h4>
                            <input type ="text" placeholder='Add guests'/>
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className = "iconDiv">
                        <FaCalendarAlt className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check in</h4>
                            <input type ="text" placeholder='Add date'/>
                        </div>
                    </div> 

                    <div className="singleInput flex">
                        <div className = "iconDiv">
                        <GrMapLocation className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check out</h4>
                            <input type ="text" placeholder='Add date'/>
                        </div>
                    </div>
                <button className='btn btnBlock flex'>Search Flight</button>
            </div>
        </div>
    </div>
)
}

export default Search