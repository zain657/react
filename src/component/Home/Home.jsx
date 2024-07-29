import React from 'react'
import img1 from "./image/imge1.svg";

export default function Home() {
    return (
        <>
            <main className='w-full h-screen90 mt-24  flex justify-center items-center'>
                <div className="content text-center flex flex-col items-center justify-center">
                    <img width="250px" src={img1} alt="#" />
                    <h2 className='mt-4 text-white text-5xl font-extrabold uppercase'>start Framework</h2>
                    <div className="Home_divider__PNOoB flex justify-center items-center text-center"><i className="fa-solid fa-star text-xl text-white "></i></div>
                    <p className="text-white text-xl">Graphic Artist - Web Designer - Illustrator</p>

                </div>
            </main>
        </>
    )
}
