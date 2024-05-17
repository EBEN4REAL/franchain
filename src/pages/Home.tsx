

import React from 'react';
import "./home.css"
import Logo from '@assets/img/logo.png';
import BannerPhoto from '@assets/img/banner-photo.png';
import RightArrow from '@assets/img/arrow.png';

const Home: React.FC = () => {
  return (
    <div className='w-full mx-auto min-h-screen flex'>
      <div className="flex  min-h-screen lg:justify-center">
        <div
          className="w-1/2 text-white md:w-80 bg-banner-gradient min-h-screen md:flex-shrink-0 md:flex md:flex-col  md:justify-evenly p-7"
        >
          <div>
            <img src={Logo} className='w-[35.46px]' />
          </div>
          <div className='flex flex-col items-center justify-center flex-grow'>
            <div className='text-center mt-20'>
              <img src={BannerPhoto} className='min-w-[427.62px]' />
            </div>
            <div className='text-center font-sans font-medium text-40px tracking-wider  leading-52.08px text-theme-gray mt-5'>
              Royalty collections, <br />
              simplified. It’s next level!
            </div>
            <div className='text-center text-theme-gray font-sans font-normal mt-3 font-22px leading-28.64px'>
              Revenue based invoice collection to <br />
              make royalty collection as easy as...
            </div>
          </div>
        </div>
        <div
          className="flex  items-stretch w-1/2 flex-col overflow-hidden min-h-screen bg-[#F8F8FB]  max md:flex-row md:flex-1 lg:max-w-screen-md"
        >
          <div className='w-full flex justify-end items-center pr-14 pt-5 text-theme-gray'>
            Log in 
            <img src={RightArrow} className='ml-5'  />
          </div>
          <div className="p-14  md:flex-1 flex-grow">
            <h3 className=" text-2xl font-semibold text-gray-700">Get started with Franchain </h3>
            <p className='mt-2 text-sm font-normal text-theme-gray'>Create an account in 5 minutes.</p>
            <form action="#" className="flex flex-col space-y-5 mt-10">
              <div className="flex flex-col space-y-1">
                <label htmlFor="first-name" className="text-base font-normal text-theme-gray leading-20.83px text-gray-500">First name</label>
                <input
                  type="text"
                  id="first-name"
                  autoFocus
                  className="px-4 py-2 border border-[#B1B7D6] focus:border-[#B1B7D6] focus:outline-none h-[56px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="last-name" className="text-base font-normal text-theme-gray leading-20.83px text-gray-500">Last name</label>
                <input
                  type="text"
                  id="last-name"
                  autoFocus
                  className="px-4 py-2 border border-[#B1B7D6] focus:border-[#B1B7D6] focus:outline-none h-[56px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="b-name" className="text-base font-normal text-theme-gray leading-20.83px text-gray-500">Business name and HQ location</label>
                <input
                  type="text"
                  id="b-name"
                  autoFocus
                  className="px-4 py-2 border border-[#B1B7D6] focus:border-[#B1B7D6] focus:outline-none h-[56px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="work-email" className="text-base font-normal text-theme-gray leading-20.83px text-gray-500">Work email</label>
                <input
                  type="text"
                  id="work-email"
                  autoFocus
                  className="px-4 py-2 border border-[#B1B7D6] focus:border-[#B1B7D6] focus:outline-none h-[56px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="b-name" className="text-base font-normal text-theme-gray leading-20.83px text-gray-500">Password</label>
                <input
                  type="password"
                  id="b-name"
                  autoFocus
                  className="px-4 py-2 border border-[#B1B7D6] focus:border-[#B1B7D6] focus:outline-none h-[56px] rounded-[10px]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-[60px]  w-[144px] text-lg	leading-23.44px px-3.5 py-5  bg-[#CED6F7] text-white  "
                >
                  Sign up
                </button>
              </div>
              <div className='font-normal text-sm text-theme-gray'>
                By clicking “Start Application“, I agree to Mercury’s Terms of Use, Privacy Policy and to receive electronic communication about my accounts and services per Mercury’s Electronic Communications Agreement, and acknowledge receipt of Mercury’s USA PATRIOT Act disclosure.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

