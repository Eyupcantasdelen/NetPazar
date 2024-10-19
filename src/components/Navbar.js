import React,{Fragment,useState} from 'react'
import {Link} from "react-router-dom"
import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
    const user={}
    const [isOpen,setIsOpen]=useState(false);
    const handleCloseNavbar=()=>{
      setIsOpen((prev)=>!prev);
    };
  return (
    <div>Navbar</div>
  )
}

export default Navbar