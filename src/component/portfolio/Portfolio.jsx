import React, { useState } from 'react'
import img1 from "./image/imge1.png";
import img2 from "./image/imge2.png";
import img3 from "./image/imge3.png";
import Card from '../cards/Card';

export default function Portfolio() {
  let objs = {
    images: [
      {
        name: "LOG CABIN",
        src: img1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "TASTY CAKE",
        src: img2,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "CIRCUS TENT",
        src: img3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "LOG CABIN",
        src: img1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "TASTY CAKE",
        src: img2,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
      {
        name: "CIRCUS TENT",
        src: img3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const showModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="portfolio  w-full flex flex-col justify-center items-center mt-20">
        <div className="header text-center mt-20 md:mt-16 lg:mt-12 ">
          <h2 className='text-4xl uppercase font-bold'>portfolio component</h2>
          <div className="Home_divider__PNOoB flex justify-center items-center text-center"><i className="fa-solid fa-star text-xl"></i></div>
        </div>
        <div className="container px-20 mb-10">
          <div className="cards grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {objs.images.map((image, index) => (
              <div key={index} className="card text-center  relative cursor-pointer" onClick={()=>{showModal(image)}}>
                <img src={image.src} alt={image.name} className="w-full h-full mb-4 rounded-lg" />
                <div className="absolute cardho top-0 bottom-0 left-0 right-0 flex justify-center items-center rounded-lg">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
            <Card {...selectedImage} close={closeModal} />
      )}
    </>
  )
}
