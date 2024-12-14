import React from 'react'

function GALARYs() {
    const GalaryItem = [
        {
            img:"/Maskgroup1.png",
        },
        {
            img:"/Maskgroup2.png",
        },
        {
            img:"/Maskgroup3.png",
        },
        {
            img:"/Maskgroup4.png",
        },
        {
            img:"/Maskgroup5.png",
        },
        {
            img:"/Maskgroup6.png",
        },
    ];
  return (
    <>
    <section className='border p-10 mb-10'>
        <div className='container mx-auto'>
            <h3 className='text-[#26395C] text-3xl font-semibold text-center lg:text-start'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span></h3>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 mt-3'>
                {
                   GalaryItem.map((source)=>(
                    <div className='mt-5'>
                        <img className='w-full object-cover h-full' src={source.img} alt="" />
                        </div>
                   )) 
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default GALARYs;