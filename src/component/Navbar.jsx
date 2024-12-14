import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu, Link,  NavbarMenuItem} from "@nextui-org/react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu, DropdownItem, Button, } from "@nextui-org/react";

import {ChevronDownIcon} from '@heroicons/react/24/outline';
import MyModal from './Homepage/Modal';
import ProfileDropDown from './Homepage/MyDropdown';

function MyNavbar() {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const menuitems = ["Eat & Drink","Club","Things to do","Shopping","Account","Contact"]
    const value = true;
  return (
    <>
    <section>
        <Navbar isMenuOpen = {isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth='2xl'>
            <NavbarContent className='sm:hidden' justify='start'>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}>

                </NavbarMenuToggle>
            </NavbarContent>
            <NavbarContent className='sm:hidden pr-3'>
                <NavbarBrand><img className='w-44' src="/logo.png" alt="" /></NavbarBrand>
            </NavbarContent>

            {/* Desktop Device */}
            <NavbarContent className='hidden sm:flex gap-4 w-full justify-center'>
               <NavbarBrand>
                <NavLink to='/'><img className='w-44' src="/logo.png" alt="" /></NavLink>
                </NavbarBrand>

               <NavbarItem>
                <NavLink to='/drink' className='text-black'
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                  })}
                >Eat & Drink</NavLink>
               </NavbarItem>
               <NavbarItem>
                <NavLink to='/club' className='foreground'>Club <button className='bg-blue-600 text-[6-8px] text-white px-2 rounded-full'>+HOT</button></NavLink>
               </NavbarItem>

               {/* Dropdown */}
               <NavbarItem>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="none" >
                    Things to do <ChevronDownIcon className='text-blue-500 w-4 h-4'/>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Water Sports</DropdownItem>
                <DropdownItem key="day">Day Parties</DropdownItem>
                <DropdownItem key="copy">Outdoors</DropdownItem>
                <DropdownItem key="edit">Rentals</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                </DropdownItem>
                </DropdownMenu>
                </Dropdown>
               </NavbarItem>

               <NavbarItem>
                <NavLink to="/cart" className='foreground'><img src="/shopping.png" alt="" /></NavLink>
               </NavbarItem>

               
               <NavbarItem>
               {/* Dropdown Account */}
               {value === true ? <MyModal /> : <ProfileDropDown />}
                
               </NavbarItem>
               <NavbarItem>
               <NavLink to="/contact">
               <button className='bg-blue-600 p-3 rounded-xl text-white font-semibold'>Contact Now</button>
               </NavLink>
               </NavbarItem>
            </NavbarContent>
           <div className='lg:hidden'>
           <NavbarContent className='w-full justify-end'>
                <NavbarItem className='hidden lg:flex'> </NavbarItem>
                <NavbarItem>
                    <img src="/shopping.png" alt="" />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className='bg-[#F5FAFF]'>
                {menuitems.map((item, index)=>(
                    <NavbarMenuItem key={index}>
                        <Link className='w-full text-black capitalize '>{item}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
           </div>
        </Navbar>
    </section>
    </>
  )
}

export default MyNavbar;