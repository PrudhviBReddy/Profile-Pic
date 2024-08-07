import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
        <NavLink style={(obj)=>{
            console.log(obj);
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"}
            }
        }} to="/Homepage">HOMEPAGE</NavLink>
        <NavLink style={(obj)=>{
            console.log(obj);
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"}
            }
        }} to="/contact">CONTACT</NavLink>
        <NavLink style={(obj)=>{
            console.log(obj);
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"}
            }
        }} to="/details">DETAILS</NavLink>
        <NavLink to="/" onClick={()=>{
            localStorage.clear();
        }}>SIGNOUT</NavLink>
    </nav>
  )
}

export default TopNavigation