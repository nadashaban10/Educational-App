import React from "react";
import { motion } from "framer-motion";
import img2 from "../../public/images/science-word-theme_23-2148540555.avif";
import img3 from "../../public/images/Historyimage.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import teacherimage from "../../public/images/virtual-reality-in-Education-.jpg";
import virtualreality from "../../public/images/freepik__upload__32332.jpeg";
import carsolimagethree from "../../public/images/mobile.jpg";
import carsolimagefour from "../../public/images/tablet2.jpg";
import carsolimagtwo from "../../public/images/tablet.jpg";
import carsolimageone from "../../public/images/600x345_WebPage-Banner_13.png";
import AboutUs from "../components/AboutUs";
import Reviews from "../components/Reviews";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/register");
  };
  return (
    <>
      <NavBar />
      <div className="parent-container">
        <div
          className="hero-container relative flex h-screen flex-col md:flex-row bg-cover md:p-0 "
          style={{ backgroundImage: `url(${virtualreality})` }}
        >
          <div className="absolute inset-0 opacity-80 backdrop-blur bg-transparent w-full h-full"></div>
          <motion.div
            className="hero-left md:relative absolute lg:top-[260px] top-[250px] space-y-2 z-10 md:bg-transparent md:p-8 p-3 "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl md:text-5xl font-bold font-poppins text-white">
              <span className="text-blue-500 md:text">
                Transform Learning with Arcade Academy
              </span>
              <br />
              <span className="text-2xl md:text-4xl">
                {" "}
                The Future of Education is Here
              </span>
            </h4>
            <p className="text-sm md:text-lg font-poppins text-white pb-2">
              Immerse yourself in interactive, AR-driven lessons that bring
              science and history to life for high school students
            </p>
            <div className="w-full h-auto md:h-[180px] flex flex-col md:flex-row items-center font-semibold space-y-3 md:space-y-0">
              <button
                onClick={handlenavigate}
                className="rounded-full text-md md:text-xl h-[57px] md:h-[70px] w-full md:w-[500px] bg-[#366cff] text-center space-y-2 text-white mr-0 md:mr-3 px-3"
              >
                Sign Up to Be Alerted When the App is Available !
              </button>
              <button className="rounded-full text-md md:text-xl h-[50px] md:h-[70px] bg-black w-full md:w-[200px] text-white px-3">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="sec-container flex flex-col md:flex-row mt-[50px] md:mt-[150px] justify-between items-center mx-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex font-poppins justify-start md:items-start items-center flex-col w-full md:w-[90%] mb-5 md:mb-0">
          <h2 className="font-bold text-2xl md:text-3xl text-center">
            Why <span className="text-[#366cff]">Arcade Academy</span> ?
          </h2>
          <p className="text-gray-700 md:text-lg font-poppins text-center py-1 md:text-left">
            Traditional education often struggles to engage students,
            particularly visual learners, in complex subjects like physics,
            chemistry, and history. Arcade Academy addresses this challenge by
            using Augmented Reality (AR) to create immersive learning
            experiences that make abstract concepts tangible and exciting
          </p>
        </div>

        <div className="right-section flex w-full md:w-[70%] justify-center items-center order-1 md:order-2 ">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            className=""
          >
            <div className="image-container rounded-2xl ">
              <img
                className="carousel-image  rounded-xl"
                src={carsolimageone}
                alt="Hot Air Balloon"
              />
            </div>
            <div className="image-container rounded-2xl">
              <img
                className="carousel-image  rounded-xl"
                src={carsolimagtwo}
                alt="Second Image"
              />
            </div>
            <div className="image-container rounded-2xl">
              <img
                className="carousel-image  rounded-2xl"
                src={carsolimagethree}
                alt="Third Image"
              />
            </div>
            <div className="image-container  rounded-2xl">
              <img
                className="carousel-image  rounded-2xl"
                src={carsolimagefour}
                alt="Third Image"
              />
            </div>
          </Carousel>
        </div>
      </motion.div>

      <motion.div
        className="Card-container flex flex-col justify-center items-center sm:items-center md:items-center space-y-5 mt-[50px] mb-[0px] md:mb-[50px] bg-gray-50 py-9"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-blue-600 tracking-widest font-bold text-center">
          EXPLORE OUR TOP SUBJECTS
        </h2>
        <div className="flex flex-col md:flex-row text-center justify-center items-center space-y-5 md:space-y-0 md:space-x-5">
          <div className="card-1 relative w-[90%] md:w-[400px] h-[230px]">
            <img src={img2} className="w-full h-full rounded-lg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-1 rounded">
              {/* <button className="mt-2 text-white bg-blue-600 hover:bg-black p-1 rounded-full w-[110px] md:w-[130px] h-[35px] md:h-[40px] top-9">
          Start Class
        </button> */}
            </div>
          </div>
          <div className="card-2 relative w-[90%] md:w-[400px] h-[230px]">
            <img src={img3} className="w-full h-full rounded-lg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white  p-1 rounded">
              {/* <button className="mt-2 text-white bg-blue-600 hover:bg-black p-1 rounded-full w-[110px] md:w-[130px] h-[35px] md:h-[40px]">
          Start Class
        </button> */}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/*courses*/}
        {/* <Courses /> */}
      </motion.div>
      <AboutUs id="AboutUs" />
      <motion.div
        className="w-full h-auto md:h-[400px] font-poppins flex flex-col md:flex-row justify-around items-center bg-[#fcfcfcec] mt-[50px] py-5"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-[620px] flex flex-col items-center  md:items-start">
          <h1 className="text-2xl md:text-[30px] mb-1 text-center md:text-left">
            <span className="text-[#366cff]"> FOR TEACHERS </span>
            we provide everything you can do in a physical classroom{" "}
          </h1>
          <p className="text-gray-600 w-full md:w-[400px] text-center md:text-left">
            The platform offers tools to track progress, assign AR-based tasks,
            and provide real-time feedback, making it easier to ensure that
            every student is keeping up with the material.
          </p>
        </div>
        <div className="flex flex-col items-center mt-5 md:mt-0 w-full md:w-[45%]">
          <div className="relative mb-8">
            <img src={teacherimage} className="w-full rounded-xl" />
          </div>
        </div>
      </motion.div>
  
      <Reviews />
      <Footer />
    </>
  );
}

export default LandingPage;