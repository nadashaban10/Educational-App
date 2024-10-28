import React from 'react';
import imag from '../../public/images/DALL·E-2024-03-28-13.07.17-Create-an-image-that-visualizes-the-concept-of-augmented-reality-in-education-showcasing-diverse-students-engaging-with-interactive-digital-elements-1024x675.webp';
import imagethree from "../../public/images/mobile.jpg";
import imagefour from "../../public/images/tablet2.jpg";

import imagtwo from "../../public/images/tablet.jpg";

import imageone from "../../public/images/600x345_WebPage-Banner_13.png";
function AboutUs() {
  return (
    <div id='features' className='md:px-14  max-w-screen-lg mx-auto w-full mt-[50px] '>
      <h1 className="text-2xl md:text-3xl font-semibold text-blue-600 font-poppins pb-2 pt-9 text-center"> What We Provide For the Students ?</h1>
      <p className='text-center text-md font-poppins text-gray-600'>Arcade Academy transforms how students learn by using Augmented Reality (AR) to create
      immersive, interactive learning experiences. Through AR, students can</p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div className='md:w-2/5 text-center md:text-left order-2 md:order-1'>
          <h2 className='md:text-5xl text-4xl font-bold text-text mb-5 leading-normal'>Explore virtual labs  <span className='text-[#366cff]'></span></h2>
          <p className='text-gray-500 text-lg mb-7'>where they can conduct experiments safely and see scientific
          principles in action</p>
          <button className='bg-blue-600 text-white py-2 px-4 rounded-lg'>Learn More</button>
        </div>
        <div className='md:w-1/2 order-1 md:order-2'>
          <img src={imagtwo} alt='image' className='w-[400px] h-auto rounded-xl shadow-lg'/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div className='md:w-1/2 order-1 md:order-1'>
          <img src={imagethree} alt='image' className='w-[400px] h-auto rounded-xl shadow-lg'/>
        </div>
        <div className='md:w-2/5 text-center md:text-left order-1 md:order-2'>
          <h2 className='md:text-5xl text-4xl font-bold  mb-5 leading-normal'>Visualize historical events</h2>
          <p className='text-gray-500 text-lg mb-7'>as though they are happening in front of them, making
          history come alive.</p>
          <button className='bg-blue-600 text-white py-2 px-4 rounded-lg'>Learn More</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div className='md:w-2/5 text-center md:text-left order-2 md:order-1'>
          <h2 className='md:text-5xl text-4xl font-bold  mb-5 leading-normal'>Interact with 3D models</h2>
          <p className='text-gray-500 text-lg mb-7'>of molecules, historical artifacts, and more, providing
hands-on learning without physical materials.
.</p>
          <button className='bg-blue-600 text-white py-2 px-4 rounded-lg'>Learn More</button>
        </div>
        <div className='md:w-1/2 order-1 md:order-2'>
          <img src={imagefour} alt='image' className='w-[400px] h-auto rounded-xl shadow-lg'/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;