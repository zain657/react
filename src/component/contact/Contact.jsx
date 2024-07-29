import React from 'react'

export default function Contact() {
    return (
        <>
            <section className='mt-10 overflow-auto contact'>
                <div className="container mt-24 mx-auto px-4">
                    <h2 className="text-center text-5xl font-bold">Contact Me</h2>
                    <div className=' flex justify-center my-4'>
                    <div className="Home_divider__PNOoB flex justify-center items-center text-center"><i className="fa-solid fa-star text-3xl text-white "></i></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full lg:w-2/3 mt-5">
                            <div >
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="p-3 mb-3 w-full border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="p-3 mb-3 w-full border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="p-3 mb-3 w-full  border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        className="w-full p-3 border border-gray-300 rounded h-40 resize-none"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <div className="flex justify-start">
                                    <input
                                        type="submit"
                                        className=" text-white text-xl font-semibold py-6 px-8 rounded cursor-pointer rounded-xl mb-10"
                                        value="Send"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
