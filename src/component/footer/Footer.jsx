import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
            <div className="f  overflow-auto text-white">
                <div className="container mx-auto grid sm:grid-cols-3 gap-3 text-center my-20 gap-y-10">
                <div className="a1 p-1">
                    <h4 className='text-3xl font-medium'>LOCATION</h4>
                    <p className='mt-3'>2215 John Daniel Drive <br/>Clark, MO 65243</p>
                </div>
                <div className="a2 p-1">
                    <h4 className='text-3xl font-medium'>AROUND THE WEB</h4>

                    <div className="icons flex gap-2 justify-center mt-3">
                        <span className='border-2 rounded-full cir flex justify-center items-center'><i className="fa-brands fa-facebook mx-1 icon"></i></span>
                        <span className='border-2 rounded-full cir flex justify-center items-center'><i className="fa-brands fa-twitter mx-1 icon"></i></span>
                        <span className='border-2 rounded-full cir flex justify-center items-center'><i className="fa-brands fa-linkedin-in mx-1 icon"></i></span>
                        <span className='border-2 rounded-full cir flex justify-center items-center'><i className="fa-solid fa-globe mx-1 icon"></i></span>
                    </div>
                </div>
                <div className="a3 p-1">
                    <h4 className='text-3xl font-medium'>ABOUT FREELANCER</h4>
                    <p className='mt-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
                </div>
            </div>
            <div className="s bg-black text-white text-center py-6">
                <h4>Copyright © Your Website 2021</h4>
            </div>
            </footer>
        </>
    )
}
