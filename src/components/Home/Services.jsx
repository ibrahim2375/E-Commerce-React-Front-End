import React, { useState } from "react";

//css
import "../../css/Home/Services.css";
function Services() {
  const [services] = useState([
    {
      id: 0,
      title: "Frequently Asked Questions",
      img: "services/ask.jpg",
      description: "Updatees on  safe Shopping in our Stores.",
    },
    {
      id: 1,
      title: "Online Payment PRocess",
      img: "services/pay.jpg",
      description: "Updatees on  safe Shopping in our Stores.",
    },
    {
      id: 2,
      title: "Home Delivery Options",
      img: "services/delivery.jpg",
      description: "Updatees on  safe Shopping in our Stores.",
    },
  ]);
  return (
    <div className="services my-10">
      <h1 className="text-2xl font-extrabold my-5">Our Services To Help You</h1>
      <div className="services_content flex flex-wrap items-center justify-center gap-10">
        {/* service  */}
        {services.map((service) => (
          <div
            key={service?.id}
            className="service  grid grid-rows-2  gap-4 rounded-lg cursor-pointer shadow-md"
          >
            <div className="service_info mt-4 p-4 row-span-1">
              <h1 className="text-2xl font-bold">{service?.title}</h1>
              <p className="text-sm mt-4 w-64">{service?.description}</p>
            </div>
            <div className="service_image relative  rounded-b-lg  row-span-2 overflow-hidden">
              <img
                src={`${service?.img}`}
                alt="offer img"
                className="w-full h-full transition duration-150 delay-75 transform hover:scale-125"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
