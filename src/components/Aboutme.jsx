import React from 'react'
import myImage from '../assets/WhatsApp Image 2023-03-07 at 14.20.11.jpeg' 

const Aboutme = () => {
    const info ={
        img: myImage,
    }
  return (
    <section className='h-screen bg-black text-white'>
        <nav className='flex flex-col md:flex-row items-center justify-between p-4'>
            <div className='border size-[100px] grid place-items-center rounded-full bg-white text-black'>
            <h1 className='font-bold text-[3rem]'>OA</h1>
            </div>

            <ul className='flex gap-4 text-[1.5rem] '>
                <li className='cursor-pointer'>About Me</li>
                <li className='cursor-pointer'>Skills</li>
                <li className='cursor-pointer'>Hobbies & Interests</li>
                <li className='cursor-pointer'>Academic Backgound</li>
            </ul>
        </nav>

        <div className=' p-4 mx-auto w-[90%] my-[100px] flex justify-around items-center   rounded-lg shadow-lg md:flex-row flex-col gap-4'> 


        <figure className='w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-gray-500 shadow-lg'>
            <img src={info.img} alt="an image of me"  className='w-full h-full  object-cover'/>
        </figure>

            <div className='grid gap-4'>
            <span className=''>Frontend Developer</span>
            <h1 className='text-3xl'>
                Hi I am <b className=' uppercase'>Obasa Ajibola</b>
            </h1>

            <p className='text-justify text-[1.2rem] w-[500px]'>
                I am a frontend developer with a passion for creating beautiful and functional user interfaces. I have experience in HTML, CSS, and JavaScript, and I am always eager to learn new technologies and improve my skills. I enjoy working on projects that challenge me and allow me to express my creativity.
            </p>
            </div>
        </div>
    </section>
  )
}

export default Aboutme