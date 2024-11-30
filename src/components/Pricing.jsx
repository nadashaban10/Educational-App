import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Pricing() {
  const [isYearly, setIsYearly] = React.useState(false);

  const packages = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for beginners to get started.",
      features: [
        { name: "10 Free Lessons", available: true },
        { name: "Basic Support", available: true },
        { name: "Limited Access", available: true },
        { name: "Community Access", available: false },
        { name: "Email Support", available: false },
      ],
    },
    {
      name: "Pro",
      price: isYearly ? "$99.99/year" : "$9.99/month",
      description: "Ideal for regular learners.",
      features: [
        { name: "Unlimited Lessons", available: true },
        { name: "Priority Support", available: true },
        { name: "Unlimited Access", available: true },
        { name: "Community Access", available: true },
        { name: "Email Support", available: true },
        { name: "Access to New Courses", available: true },
      ],
    },
    {
      name: "Premium",
      price: isYearly ? "$199.99/year" : "$19.99/month",
      description: "Best for advanced learners.",
      features: [
        { name: "Unlimited Lessons", available: true },
        { name: "Priority Support", available: true },
        { name: "Unlimited Access", available: true },
        { name: "Personal Mentor", available: true },
        { name: "Community Access", available: true },
        { name: "Email Support", available: true },
        { name: "Access to New Courses", available: true },
        { name: "1-on-1 Sessions", available: true },
      ],
    },
  ];

  return (
    <div
      id="Pricing"
      className="flex flex-col items-center justify-center md:px-14 p-4 w-full mx-auto py-10 mt-[40px] mb-[] bg-[#fcfcfcec]"
    >
      <div className="text-center">
        <motion.h2
          className="md:text-4xl text-3xl font-extrabold font-poppins text-[#366cff] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Pricing Plans
        </motion.h2>
        <motion.p
          className="text-gray-600 md:w-full mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose the plan that best suits your needs and start learning today!
        </motion.p>
        <div className="mt-8 flex justify-center items-center">
          <span className="text-2xl font-semibold">Monthly</span>
          <div className="relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              className={`ml-3 mt-4 h-3.5 w-9 appearance-none ${
                isYearly ? "bg-blue-500" : ""
              } rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-500 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </div>
          <span className="text-2xl font-semibold">Yearly</span>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-center w-[85%] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * packages.indexOf(pkg) }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <motion.p
                className="text-3xl font-extrabold mb-4 text-[#366cff]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {pkg.price}
              </motion.p>
              <ul className="text-center mb-6">
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className="mb-2 flex items-center justify-center"
                  >
                    {feature.available ? (
                      <FaCheck className="text-green-500 mr-2" />
                    ) : (
                      <FaTimes className="text-red-500 mr-2" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              className="bg-[#366cff] text-white py-2 px-4 rounded-lg mt-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
