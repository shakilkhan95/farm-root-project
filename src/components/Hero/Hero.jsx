import React from 'react';
import heroImg from '../../assets/img/hero.png'
import ButtonPrimary from '../Buttons/ButtonPrimary';

const Hero = () => {
    return (
      <section className="min-h-[90vh] py-5 md:py-0 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-5 lg:px-14 bg-linear-to-r from-[#D7E8DC] to-[#C4DBCE]">
        {/* content section  */}
        <div className="text-center md:text-start mt-12 md:mt-0 space-y-5 max-w-xl">
          <h3 className="text-sm md:text-lg text-gray-700">
            Fresh From Farm to Your Plate
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Healthy Eating, <br /> the Organic Way
          </h1>
          <p className="text-gray-600">
            Discover fresh, organic, and handpicked vegetables directly from
            local farms to your kitchen.{" "}
          </p>

          <ButtonPrimary btnValue='Explore Menu'/>
        </div>

        {/* img section  */}
        <div className="w-4/5 md:w-2/5">
          <img
            className="rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] border-2 border-white"
            src={heroImg}
            alt="Hero Image"
          />
        </div>
      </section>
    );
};

export default Hero;