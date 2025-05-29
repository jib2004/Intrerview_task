import React from 'react'

const Hobby = () => {
  return (
        <section id='hobbies' className='bg-black text-white h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Hobbies & Interests</h1>
        <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center text-[1.5rem] mt-8'>
            <li>Reading</li>
            <li>Playing games</li>
            <li>Talking to people</li>
            <li>Watching movies</li>
            <li>Cooking</li>
        </ul>
        </section>
  )
}

export default Hobby