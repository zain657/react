import React, { useState } from 'react'

export default function Card({ name, src, description, close }) {
    return (
        <>
            <div id='full' className="full fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center overflow-hidden" onClick={close}>
                <div onClick={(e) => e.stopPropagation()} className="fixed cardM top-10  rounded bg-white bottom-20 flex justify-center items-center flex-col  w-7/12 overflow-scroll">
                    <h2 className="display-5 fw-bolder text-center mb-4 text-5xl font-bold mt-5">
                        {name}
                    </h2>
                    <div className="">
                        <div className="Home_divider__PNOoB flex justify-center items-center text-center"><i className="fa-solid fa-star text-xl text-white "></i></div>
                    </div>
                    <div className="modal-content py-5 vh-100 ">
                        <button
                            onClick={close}
                            type="button"
                            className=" absolute end-0 top-0 m-3 border-0 bg-white"
                        >
                            <i className="fa-solid fa-xmark main-color h1 text-3xl"></i>
                        </button>

                        <div className="modal-body">
                            <div className="w-10/12 xl:w-7/12 mx-auto  text-center">
                                <figure className="my-5 ">
                                    <img className="  rounded-lg" src={src} alt="" />
                                </figure>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer fixed bottom-5 flex  justify-center items-center border rounded-full border-black z-50">
                    <button
                        type="button"
                        className=" text-white main-background border-0 font-bold py-2 px-3"
                        onClick={close}
                    >
                        <span className="fw-bolder ">X</span> Close Window
                    </button>
                </div>
            </div>
        </>
    )
}
