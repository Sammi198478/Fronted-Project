import { Button } from '@nextui-org/react';
import React from 'react'

const footerData = {
    socialIcons: [
        "fb.png",
        "Instagram1.png",
        "yt.png",
        "Twitter.png",
        "tikTok.png",
        "linkDin.png",
    ],

    sections:[
        {
            title: "Menu",
            menus:[
                { items:["Home","Eat","Drink","Events","Club","Recreation"] },
                {items:["Blog","Careers","Contact","FAQs"]}
            ]
        },
        {
            title: "Utility Pages",
            menus:[
                {items:["Start Here", "Pay with Crypto", "Style Guide", "Password Protected","404 Not Found","Licenses","Changelog",]}
            ]
        },
    ],
    partnerSection:{
        image: "partner.png",
        title: "Become a Partner",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
    },
    logo: "logo.png",
    copyright:`Copyright 2022 ©  ${new Date().getFullYear()} All right reserved`
};

const MenuSection = ({title,menus})=>{
    return(
        <div>
            <p className='font-semibold text-2xl border-b-1 mb-5 py-3'>{title}</p>
            <div className='flex gap-12 text-xl'>
                {menus.map((menu, index)=>(
                    <ul key={index}>
                        {menu.items.map((item, idx)=>
                        <li className='mb-2' key={idx}>{item}</li>
                        )}
                    </ul>
                ))}
            </div>
        </div>
    )
};

function Footer() {
    const{socialIcons, sections, partnerSection, logo,  copyright} = footerData;
  return (
    <>
    <footer className='p-12 mb-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2'>
            {/* left side */}
            <div className='col-span-1'>
                <img className='w-fit' src={logo} alt="" />
                <p className='text-sm mb-4'>{copyright}</p>
                <div className='flex space-x-4'>
                    {socialIcons.map((icon, index)=>(
                         <a href="" key={index}>
                            <img className='w-4 h-4' src={icon} alt="" />
                         </a>
                    ))}
                   
                </div>
            </div>
            {/* Right side */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-24 ms-auto col-span-3'>
                {sections.map((section, index)=>(
                    <MenuSection key={index}
                    title = {section.title}
                    menus={section.menus}
                    >

                    </MenuSection>
                ))}
                  {/* partnerSection */}
            <div className='w-full bg-[#F5FAFF] p-5'>
               <img className='mb-2' src={partnerSection.image} alt="" />
               <h3 className='text-3xl text-[#26395C] font-bold'>{partnerSection.title}</h3>
               <p className='text-medium text-gray-400 mt-2 mb-2'>{partnerSection.des}</p>
               <Button color='primary' className='w-full' size='xl'>Join Now</Button>
            </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;