import Header from "../shared/Header";
import downarrow from '../assets/socialicon/arrow-down.png';
import coin from '../assets/bnb.png';
import copy from '../assets/copy-alt.png';
import Footer from "../shared/Footer";
import { useState } from "react";

const Home = () => {

  const [active, setActive] = useState('');
  console.log(active);
  return (
    <div>
      <Header />

      <div className="flex gap-5 mt-[18px] mx-auto justify-center">
        {/* ************ */}
        {/* 1 st */}
        {/* ************ */}
        <div className="w-[560px] h-[662px]  border-[1px] bg-[#EDEDED] border-[#B6B6B6] rounded-2xl">
          <div className="font-semibold text-center">
            <h2 className="text-[#272727] text-[32px]  pt-7 ">Swap</h2>
            <p className="text-primary h-9 text-md pt-2 ">Trade tokens in an instant</p>
            <hr className="w-[543px] mx-auto h-[1px] px-2 mt-4 bg-[#9F9F9F]" />

            <div className="flex place-items-center gap-1 mt-12 px-10">
              <img src={coin} alt="" />
              <select className="border-none outline-none  bg-[#EDEDED] text-primary" name="" id="">
                <option className=" text-primary opacity-50" value="BNB">BNB</option>
                <option className=" text-primary opacity-50" value="USD">USD</option>
                <option className=" text-primary opacity-50" value="EUR">EUR</option>
                <option className=" text-primary opacity-50" value="GBP">GBP</option>
                <option className=" text-primary opacity-50" value="JPY">JPY</option>
                <option className=" text-primary opacity-50" value="AUD">AUD</option>
              </select>
            </div>
            <input className="mt-5 border-[1px] font-medium w-[477px] h-[55px] border-secondary rounded-2xl focus:border-secondary outline-secondary placeholder:text-[#717171]   py-4 px-3" placeholder="0.0" type="text" />

            <img className="w-10 h-10 mt-4 rounded-full mx-auto bg-white" src={downarrow} alt="" />

            {/*  */}
            <div className="flex place-items-center gap-1 px-10">
              <img src={coin} alt="" />
              <select className="border-none outline-none  bg-[#EDEDED]  text-primary" name="" id="">
                <option className=" text-primary opacity-50" value="BNB">BNB</option>
                <option className=" text-primary opacity-50" value="USD">USD</option>
                <option className=" text-primary opacity-50" value="EUR">EUR</option>
                <option className=" text-primary opacity-50" value="GBP">GBP</option>
                <option className=" text-primary opacity-50" value="JPY">JPY</option>
                <option className=" text-primary opacity-50" value="AUD">AUD</option>
              </select>
              <img className="w-6 h-6 ms-5" src={copy} alt="" />
            </div>
            <input className="mt-5 border-[1px] font-medium w-[477px] h-[55px] border-secondary rounded-2xl focus:border-secondary outline-secondary placeholder:text-[#717171]   py-4 px-3" placeholder="0.0" type="text" />

            <div className="flex justify-between mt-[42px] px-10">
              <span className="text-primary  ">Slippage Tolerance</span>
              <span className="text-secondary">0.5%</span>
            </div>
            <button className="bg-secondary mt-9 rounded-2xl w-[477px] h-[55px]">Connect Wallet</button>
          </div>
        </div>

        {/* 2nd */}

        <div className="w-[560px] h-[662px]  border-[1px] bg-[#EDEDED] border-[#B6B6B6] rounded-2xl">
          <div className="font-semibold text-center">





          </div>
        </div>




      </div>
      <Footer />
    </div>
  );
};

export default Home;
