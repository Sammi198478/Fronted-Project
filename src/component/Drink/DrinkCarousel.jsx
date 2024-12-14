import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";
import { Button} from "@nextui-org/react";

function DrinkCarousel() {

    const CarouselData = [
        {
            id: 1,
            image: "/slider1.png",
            heading: "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
            id: 2,
            image: "/slider.png",
            heading: "Hablu programmer made in lagos tour",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
            id: 3,
            image: "/slider1.png",
            heading: "kaniz made in lagos tour",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleDotClick = (index) => {
        setCurrentIndex(index);
      };

    const currentSlider = CarouselData[currentIndex]
    const handlePrev = ()=>{
        setCurrentIndex((prevIndex)=>(
            prevIndex === CarouselData.length -1 ? 0 : prevIndex -1
        ))
    };
    const handleNext = ()=>{
        setCurrentIndex((prevIndex)=>(
            prevIndex === CarouselData.length -1 ? 0 : prevIndex +1
        ))
    };

    const TagData = [
        {
            id:1,
            img: "/Calendar.png",
            title: "Dec 12 2022",
        },
        {
            id:1,
            img: "/Mark.png",
            title: "TBS  Lagos",
        },
        {
            id:1,
            img: "/Clock.png",
            title: "9:00 PM ",
        },
        {
            id:1,
            img: "/Tag.png",
            title: "N20,000",
        },
    ];

  return (
    <>
    <section className='overflow-hidden p-2 mt-28'>
        {/* <h1 className='text-center text-2xl lg:text-4xl text-[#26395C] mt-24 mb-12 font-semibold'>Upcoming Eat & Drink Events</h1> */}
        <div className='relative w-full max-w-screen-2xl mx-auto'>
            <div className='flex items-center justify-between'>
                <button
                onClick={handlePrev} className='absolute left-0 transform translate-x-6 flex items-center justify-center bg-gray-500 text-white rounded-full w-12 h-12' >
                   <FaChevronLeft />
                </button>
                <div className='flex flex-col lg:flex-row items-center gap-6  w-full px-12'>
                    <div className='w-full lg:w-1/2'>
                        <h3 className='text-2xl font-semibold lg:ms-10 text-[#26395C] text-center lg:text-start'>Upcoming Eat & Drink Events </h3>
                        <img className='object-cover w-full h-auto' src={currentSlider.image} alt="" />
                        {/* left side end */}
                    </div>


                    {/* Right side start */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                    <h2 className='text-xl lg:text-2xl font-bold lg:w-[50%] leading-tight'>{currentSlider.heading}</h2>
                    <p className='text-gray-700 lg:w-[70%] text-sm'>{currentSlider.des}</p>
                    <div className='grid grid-cols-2 lg:w-[60%]'>
                        {
                          TagData.map((data, id)=>(
                            <div key={id} className='flex items-center mt-5 mb-2'>
                                <img className='w-4 h-4' src={data.img} alt="" />
                                <p className='ms-2 text-lg font-semibold'>{data.title}</p>
                            </div>
                          ))  
                        }
                    </div>
                    <div className='flex items-center gap-4'>
                    <Button color="primary" variant="bordered" size='lg'>
                       Bordered
                    </Button> 
                    <Button color="primary" size='lg'>
                       Primary
                    </Button> 
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <p>Connect with us on:</p>
                        <div className='flex gap-3'>
                            <img src="/Twitter.png" alt="" />
                            <img src="/Instagram.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>

                <button onClick={handleNext}  className='absolute right-0 transform translate-x-6 flex items-center justify-center bg-gray-500 text-white rounded-full w-12 h-12 mr-20' >
                    <FaChevronRight />
                </button>
            </div>
              <div className="flex justify-center items-center gap-2 mt-6">
          {CarouselData.map((_, index) => (
            <button
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
        </div>
    </section>
    </>
  )
}

export default DrinkCarousel;