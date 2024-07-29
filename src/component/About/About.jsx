import React from 'react'

export default function About() {
  return (
    <>
      <div className="about mt-24 h-screen90 w-full flex flex-col justify-center items-center text-white">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className='text-4xl uppercase font-bold'>about component</h2>
          <div className="Home_divider__PNOoB flex justify-center items-center text-center"><i className="fa-solid fa-star text-xl text-white"></i></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
          <p className='sm:ps-20 p-5'>Freelancer is a free bootstrap theme created by Route. The download includes <br/> the complete source files including HTML, CSS, and JavaScript as well as <br/> optional SASS stylesheets for easy customization.</p>
          <p className='sm:pe-20 p-5'>Freelancer is a free bootstrap theme created by Route. The download includes <br/> the complete source files including HTML, CSS, and JavaScript as well as <br/> optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </>
  )
}
