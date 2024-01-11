import Header from "../shared/Header";
import downarrow from '../assets/socialicon/arrow-down.png';
// import chart from '../assets/socialicon/';
import pmlogo from '../assets/pmlogo.png';
import msud from '../assets/msud.png';
import copy from '../assets/copy-alt.png';
import refresh from '../assets/refresh1.png';
import Footer from "../shared/Footer";
import { useState } from "react";

const Home = () => {

  const [active, setActive] = useState('');
  console.log(active);
  return (
    <div>
      <Header />

      <div className="flex flex-col w-[1140px] lg:flex-row gap-5 mt-[18px] mx-auto justify-center">
        {/* ************ */}
        {/* 1st  card*/}
        {/* ************ */}
        <div className="relative w-[400px] lg:w-[560px] lg:h-[662px] py-6 lg:py-7 mx-auto px-3 border-[1px] bg-[#EDEDED] border-[#B6B6B6] rounded-2xl">
          <div className="absolute right-6 top-6">
            <img className="w-6 h-6" src={refresh} alt="" />
          </div>
          <div className="font-semibold text-center">
            <h2 className="text-[#272727] text-xl lg:text-[26px]">Swap Your PerryMind Token</h2>
            <p className="text-primary h-9 text-md lg:text-lg pt-2 ">Trade tokens in an instant</p>
            <hr className=" w-full lg:w-[543px] mx-auto h-[1px] px-2 mt-4 bg-[#9F9F9F]" />

            <div className="flex place-items-center gap-1 mt-12 lg:px-10">
              <img className="" src={pmlogo} alt="" />
              <select className="border-none outline-none  bg-[#EDEDED] text-primary" name="" id="">
                <option className=" text-primary opacity-50" value="PMIND">PMIND</option>
                <option className=" text-primary opacity-50" value="USD">USD</option>
                <option className=" text-primary opacity-50" value="EUR">EUR</option>
                <option className=" text-primary opacity-50" value="GBP">GBP</option>
                <option className=" text-primary opacity-50" value="JPY">JPY</option>
                <option className=" text-primary opacity-50" value="AUD">AUD</option>
              </select>
            </div>
            <input className="mt-5 border-[1px] font-medium w-full lg:w-[477px] h-12 lg:h-[55px] border-secondary rounded-2xl focus:border-secondary outline-secondary placeholder:text-[#717171]   py-4 px-3" placeholder="0.0" type="text" />

            <img className="w-10 h-10 mt-4 mb-7 rounded-full mx-auto bg-white" src={downarrow} alt="" />

            {/*  */}
            <div className="flex place-items-center gap-1 lg:px-10">
              <img src={msud} alt="" />
              <select className="border-none outline-none  bg-[#EDEDED]  text-primary" name="" id="">
                <option className=" text-primary opacity-50" value="BNB">MUSD</option>
                <option className=" text-primary opacity-50" value="USD">USD</option>
                <option className=" text-primary opacity-50" value="EUR">EUR</option>
                <option className=" text-primary opacity-50" value="GBP">GBP</option>
                <option className=" text-primary opacity-50" value="JPY">JPY</option>
                <option className=" text-primary opacity-50" value="AUD">AUD</option>
              </select>
              <img className="w-6 h-6 ms-5" src={copy} alt="" />
            </div>
            <input className="mt-5 border-[1px] font-medium w-full lg:w-[477px] h-12 lg:h-[55px] border-secondary rounded-2xl focus:border-secondary outline-secondary placeholder:text-[#717171]   py-4 px-3" placeholder="0.0" type="text" />

            <div className="flex justify-between mt-[42px] px-10">
              <span className="text-primary  ">Slippage Tolerance</span>
              <span className="text-secondary">0.5%</span>
            </div>
            <button className="bg-secondary mt-9 rounded-2xl w-full lg:w-[477px] h-12 lg:h-[55px]">Connect Wallet</button>
          </div>
        </div>

        {/* 2nd  card*/}

        <div className=" w-[400px] lg:w-[560px] mx-auto h-[662px] px-6 py-7 border-[1px] bg-[#EDEDED] border-[#B6B6B6] rounded-2xl">
          <div className="font-semibold text-center">
            {/* swap */}
            <div className="font-semibold flex gap-3 place-items-center">
              <img className="w-[30px] h-[30px]" src={coin} alt="" />
              <img className="w-[30px] h-[30px]" src={coin} alt="" />
              <p className=" text-[#343434]">BNB/MIND</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clipPath="url(#clip0_1176_54)">
                    <path d="M28.75 20H3.35121L3.36871 19.9813L6.17371 17.125C6.29645 17.0097 6.39462 16.8708 6.46233 16.7166C6.53004 16.5624 6.5659 16.3961 6.56775 16.2277C6.5696 16.0593 6.53741 15.8923 6.47311 15.7367C6.4088 15.581 6.31371 15.44 6.19354 15.322C6.07337 15.204 5.93061 15.1116 5.77381 15.0501C5.61701 14.9887 5.44942 14.9596 5.28109 14.9645C5.11276 14.9695 4.94716 15.0084 4.79425 15.0789C4.64133 15.1495 4.50424 15.2502 4.39121 15.375L1.59246 18.2213C1.38871 18.425 1.10371 18.7375 0.812462 19.0663C0.289439 19.6577 0.000732422 20.4199 0.000732422 21.2094C0.000732422 21.9989 0.289439 22.7611 0.812462 23.3525C1.10371 23.68 1.38871 23.9925 1.58496 24.19L4.39121 27.045C4.62646 27.266 4.93808 27.3875 5.26084 27.3839C5.5836 27.3804 5.89248 27.2521 6.12281 27.026C6.35314 26.7998 6.48707 26.4934 6.49656 26.1707C6.50604 25.8481 6.39036 25.5343 6.17371 25.295L3.42996 22.5H28.75C29.0815 22.5 29.3994 22.3683 29.6339 22.1339C29.8683 21.8995 30 21.5815 30 21.25C30 20.9185 29.8683 20.6005 29.6339 20.3661C29.3994 20.1317 29.0815 20 28.75 20Z" fill="#343434" />
                    <path d="M1.25 9.99999H26.5688L23.8263 12.7912C23.7035 12.9065 23.6053 13.0455 23.5376 13.1997C23.4699 13.3538 23.4341 13.5201 23.4322 13.6885C23.4304 13.8569 23.4626 14.0239 23.5269 14.1796C23.5912 14.3352 23.6863 14.4763 23.8064 14.5942C23.9266 14.7122 24.0694 14.8047 24.2262 14.8661C24.383 14.9276 24.5505 14.9567 24.7189 14.9517C24.8872 14.9468 25.0528 14.9079 25.2057 14.8373C25.3586 14.7668 25.4957 14.6661 25.6088 14.5412L28.4075 11.6925C28.6113 11.4887 28.8963 11.1762 29.1875 10.8487C29.7105 10.2573 29.9992 9.4951 29.9992 8.70561C29.9992 7.91612 29.7105 7.15388 29.1875 6.56249C28.8963 6.23374 28.6113 5.92124 28.415 5.72499L25.6088 2.87499C25.3735 2.65398 25.0619 2.53254 24.7391 2.53609C24.4164 2.53964 24.1075 2.6679 23.8772 2.89403C23.6468 3.12016 23.5129 3.42663 23.5034 3.74927C23.4939 4.07191 23.6096 4.38571 23.8263 4.62499L26.64 7.48749L26.65 7.49999H1.25C0.918479 7.49999 0.600537 7.63168 0.366117 7.8661C0.131696 8.10052 0 8.41847 0 8.74999C0 9.08151 0.131696 9.39945 0.366117 9.63387C0.600537 9.86829 0.918479 9.99999 1.25 9.99999Z" fill="#343434" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1176_54">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            {/* ************ */}
            {/* data */}
            {/* ************ */}
            <div className="flex gap-2.5 lg:gap-8 flex-col lg:flex-row  place-items-center justify-between mt-[30px] ">
              <div className="flex gap-6 w-full justify-start lg:justify-between place-items-center mx-auto">

                {/* date 1 */}
                <div className="flex gap-4 place-items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clipPath="url(#clip0_1176_59)">
                      <path d="M21.875 2.08333H18.75V0H16.6667V2.08333H8.33333V0H6.25V2.08333H3.125C2.2962 2.08333 1.50134 2.41257 0.915291 2.99862C0.32924 3.58468 0 4.37953 0 5.20833L0 25H25V5.20833C25 4.37953 24.6708 3.58468 24.0847 2.99862C23.4987 2.41257 22.7038 2.08333 21.875 2.08333ZM2.08333 5.20833C2.08333 4.93207 2.19308 4.66711 2.38843 4.47176C2.58378 4.27641 2.84873 4.16667 3.125 4.16667H21.875C22.1513 4.16667 22.4162 4.27641 22.6116 4.47176C22.8069 4.66711 22.9167 4.93207 22.9167 5.20833V8.33333H2.08333V5.20833ZM2.08333 22.9167V10.4167H22.9167V22.9167H2.08333Z" fill="#343434" />
                      <path d="M17.7083 13.5416H15.625V15.625H17.7083V13.5416Z" fill="#343434" />
                      <path d="M13.5416 13.5416H11.4583V15.625H13.5416V13.5416Z" fill="#343434" />
                      <path d="M9.37508 13.5416H7.29175V15.625H9.37508V13.5416Z" fill="#343434" />
                      <path d="M17.7083 17.7084H15.625V19.7917H17.7083V17.7084Z" fill="#343434" />
                      <path d="M13.5416 17.7084H11.4583V19.7917H13.5416V17.7084Z" fill="#343434" />
                      <path d="M9.37508 17.7084H7.29175V19.7917H9.37508V17.7084Z" fill="#343434" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1176_59">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-primary">10.1.2024</span>
                </div>

                {/* ************ */}
                {/* time 2*/}
                {/* ************ */}
                <div className="flex gap-4  justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clipPath="url(#clip0_1176_69)">
                      <path d="M12.5 25C5.60729 25 0 19.3927 0 12.5C0 5.60729 5.60729 0 12.5 0C19.3927 0 25 5.60729 25 12.5C25 19.3927 19.3927 25 12.5 25ZM12.5 2.08333C6.75625 2.08333 2.08333 6.75625 2.08333 12.5C2.08333 18.2437 6.75625 22.9167 12.5 22.9167C18.2437 22.9167 22.9167 18.2437 22.9167 12.5C22.9167 6.75625 18.2437 2.08333 12.5 2.08333ZM17.7083 12.5C17.7083 11.924 17.2427 11.4583 16.6667 11.4583H13.5417V6.25C13.5417 5.67396 13.075 5.20833 12.5 5.20833C11.925 5.20833 11.4583 5.67396 11.4583 6.25V12.5C11.4583 13.076 11.925 13.5417 12.5 13.5417H16.6667C17.2427 13.5417 17.7083 13.076 17.7083 12.5Z" fill="#343434" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1176_69">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-primary">10.20 PM</span>
                </div>
              </div>

              {/* ************ */}
              {/* year 3*/}
              {/* ************ */}

              <div className="ms-auto my-1 ">
                <div className="flex gap-6 px-[7px] py-[6px] rounded-lg place-items-center  justify-center bg-white   p-1.2">
                  <p onClick={() => setActive(1)} className="text-white w-16 h-9 flex place-items-center justify-center bg-secondary rounded-[10px]">24H</p>
                  <p onClick={() => setActive(2)} className="text-secondary ">1W</p>
                  <p onClick={() => setActive(3)} className="text-secondary ">1M</p>
                  <p onClick={() => setActive(4)} className="text-secondary ">1Y</p>
                </div>

              </div>
            </div>

            {/* ************ */}
            {/* Chart */}
            {/* ************ */}

            <div className="h-[400px] lg:h-[500px] my-2 w-full bg-white rounded-2xl flex place-items-end">
              {/* <img src={chart} alt="" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="496" height="301" viewBox="0 0 496 301" fill="none">
                <path d="M483.574 24.4395C487.196 16.5952 491.116 10.2115 495.5 6.18582V300.5H0.5V263.308C0.776547 263.721 1.13548 264.035 1.60719 264.08C2.18219 264.135 2.67135 263.764 3.05885 263.316C3.46435 262.847 3.87124 262.166 4.28318 261.317C5.92822 257.927 7.88651 251.37 10.1144 242.869C12.0039 235.658 14.0969 227.011 16.3654 217.637C16.7768 215.937 17.1941 214.213 17.617 212.47C20.3718 201.11 23.3659 188.913 26.5562 177.04C32.9442 153.266 40.0989 130.87 47.6607 119.07C49.5479 116.125 51.4414 113.872 53.3293 112.422C55.212 110.976 57.0562 110.353 58.8766 110.593C60.7043 110.833 62.6097 111.956 64.5815 114.216C66.5534 116.477 68.5587 119.838 70.5835 124.47C76.7176 138.504 81.2926 150.832 84.9341 160.645C86.0814 163.736 87.1361 166.578 88.1176 169.145C90.1613 174.49 91.8976 178.668 93.4978 181.405C94.2962 182.77 95.0842 183.819 95.8914 184.472C96.7129 185.137 97.6018 185.426 98.5352 185.151C99.4268 184.889 100.246 184.142 101.034 183.026C101.83 181.899 102.641 180.327 103.493 178.299C105.198 174.241 107.101 168.271 109.379 160.17C112.599 148.714 116.58 132.948 121.815 112.215C123.985 103.623 126.37 94.1777 129.005 83.8324C134.82 61.0066 140.423 39.3634 146.636 23.8228C149.743 16.0491 152.986 9.84698 156.455 5.79264C159.921 1.74202 163.535 -0.0824133 167.421 0.664155C171.362 1.42114 175.761 4.84542 180.698 11.7676C185.623 18.6716 191.022 28.9675 196.995 43.2957C208.939 71.9484 223.14 116.637 240.412 182.342L240.779 183.736L241.354 182.414C273.98 107.472 301.328 51.5488 324.162 24.2403C329.866 17.4184 335.267 12.4096 340.374 9.33506C345.477 6.26335 350.255 5.13956 354.747 6.02613C359.241 6.91331 363.538 9.83125 367.639 15.0248C371.741 20.2204 375.621 27.6627 379.281 37.5276C388.892 63.4317 397.321 82.8746 404.792 96.9993C412.256 111.112 418.787 119.962 424.618 124.631C427.54 126.971 430.31 128.28 432.954 128.656C435.607 129.032 438.092 128.463 440.42 127.118C445.042 124.448 449.06 118.716 452.729 111.221C458.322 99.7954 463.218 84.0196 468.186 68.0139C469.743 62.9972 471.307 57.958 472.901 53.023C476.248 42.666 479.732 32.7595 483.574 24.4395Z" fill="url(#paint0_linear_1167_38)" stroke="url(#paint1_linear_1167_38)" />
                <defs>
                  <linearGradient id="paint0_linear_1167_38" x1="248" y1="-132.134" x2="248" y2="441.515" gradientUnits="userSpaceOnUse">
                    <stop offset="0.166717" stopColor="#FF971D" />
                    <stop offset="0.682299" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_1167_38" x1="331.917" y1="46.3077" x2="389.132" y2="269.695" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF971D" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
