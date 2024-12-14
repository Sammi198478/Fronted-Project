import React from 'react'
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Contact() {
    const Items = [
        {
            img: "/InfluencerIcon.png",
            heading: "Become an Influencer",
            description: "Join a company that’s passionate about design and technology",
            website: "chills@chillsbay.com",
        },
        {
            img: "/NeedHelpIcon.png",
            heading: "Need Help?",
            description: "Questions about using  Market? Our support team is here to help.",
            website: "chills@chillsbay.com",
        },
        {
            img: "/Group.png",
            heading: "Refunds & Others",
            description: "Join a company that’s passionate about design and technology",
            website: "chills@chillsbay.com",
        },
    ];
    return (
        <>
            <section>
                <div className='lg:w-[70%] mx-auto'>
                    <div className='flex flex-col md:flex-row items-center justify-center p-6 md:p-12'>
                        {/* left side */}
                        <div className='lg:w-1/2 w-full mb-8 text-center lg:text-start'>
                            <h2 className='text-[#26395C] text-3xl font-bold mb-4 mt-12'>Contact Us</h2>
                            <p className='text-[#656B89] w-[50%] mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.</p>
                            <div className='mt-5 w-[50%] mx-auto lg:mx-0 lg:w-full'>
                                <p className='flex mt-3 mb-3 gap-2 font-semibold'><img className='w-4 h-4' src="/phone.png" alt="" /> <span className='text-[#26395C]'>(840) 371 - 2514</span></p>
                                <p className='flex gap-2 font-semibold'><img className='w-4 h-4' src="/email.png" alt="" /> <span className='text-[#26395C]'>chills@chillsbay.com</span></p>

                            </div>
                        </div>
                        {/* Right side Form */}
                        <div className='w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-xl'>
                            <form className='space-y-8' action="">
                                <div className='flex flex-cols md:flex-row gap-4'>
                                    <Input label="First Name" type="email" placeholder='First Name' labelPlacement='outside' />
                                    <Input label="Last Name" type="text" placeholder='Last Name' labelPlacement='outside' />

                                </div>
                                <div className='flex flex-cols md:flex-row gap-4'>
                                    <Input label="Email Address" type="email" placeholder='e.g. johndoe@email.com' labelPlacement='outside' className='text-[#969DAA]' />
                                    <Input label="Phone Number" type="number" placeholder='Phone Number' labelPlacement='outside' />

                                </div>
                                <div className='mt-10'>
                                    <Select

                                        items="Hp Team"
                                        label="Subject"
                                        placeholder="Select an option"
                                        labelPlacement="outside"
                                    >
                                        <SelectItem>Frontend Web Development course</SelectItem>
                                        <SelectItem>Full Stack Development course</SelectItem>
                                    </Select>
                                </div>
                                <div>
                                    <Textarea
                                        isRequired
                                        label="Description"
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                    />
                                    <Button className='w-full mb-4 mt-5' color='primary'>SEND MESSAGE</Button>
                                </div>
                            </form>

                        </div>
                    </div>
                    {/* card section */}
                    <div className='mt-24 mb-24'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {
                                Items.map((item, index) => (
                                    <div key={index} className='text-center justify-center items-center'>
                                        <img className='w-20 h-20 object-cover rounded mb-4 mx-auto' src={item.img} alt="" />
                                        <h3 className='text-[#26395C] text-xl font-semibold mb-2'>{item.heading}</h3>
                                        <p className='text-[#656B89] mb-4 w-[60%] mx-auto'>{item.description}</p>
                                        <a className='text-[#0E8BFF] font-medium hover:underline '>{item.website}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Accordion */}
                <div className='w-full bg-[#FBFCFF] p-24'>
                    <div className='lg:w-[70%] mx-auto'>
                        <h3 className='text-3xl font-bold text-center text-[#26395C]'>Frequently Asked Questions</h3>
                        <p className='text-medium text-center lg:w-[50%] mx-auto mb-12 mt-2 text-[#656B89]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis tristique morbi.</p>
                        <Accordion className='gap-5 text-[#26395C] font-semibold' variant="splitted"  defaultExpandedKeys={("1")}>
                        <AccordionItem className='text-[#656B89] p-4' key="1" aria-label="Accordion 1" title="Do you offer refunds for purchased products?">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
                        </AccordionItem>
                        <AccordionItem className='text-[#656B89] p-4' key="2" aria-label="Accordion 2" title="How does Chillsbay work?">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
                        </AccordionItem>
                        <AccordionItem className='text-[#656B89] p-4' key="3" aria-label="Accordion 3" title="Can I pay with Crypto on Chillsbay.com? ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
                        </AccordionItem>
                        <AccordionItem className='text-[#656B89] p-4' key="4" aria-label="Accordion 3" title="How can I become a Chillsbay Host?">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
                        </AccordionItem>
                    </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;