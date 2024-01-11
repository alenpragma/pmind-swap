import logo from '../assets/logo.png';
import coin from '../assets/mind1.png';
import global from '../assets/globe1.png';
import { useState } from 'react';


const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='bg-[#EDEDED] border-b-[1px] border-[#B6B6B6] z-20  mx-auto text-primary  '>

      <div className='  relative'>
        <div className={`absolute bg-[#EDEDED] w-full mt-20 z-10 transition-all duration-300 ease-in  ${show == true ? "-mt-80" : ""}`}>
          <ul className='flex flex-col ps-6 gap-7'>
            <li className='text-[#393939] font-medium cursor-pointer leading-normal'>Trade</li>
            <li className='text-[#393939] font-medium cursor-pointer leading-normal'>Liquidity</li>
            <li className='text-[#393939] font-medium cursor-pointer leading-normal'>Limit</li>
            <li className='text-[#393939] font-medium cursor-pointer leading-normal'>More</li>
            <div className='flex pb-4 place-items-center gap-1.5'>
              <img className='' src={coin} alt="" />
              <p className='text-[##393939] '>$54343</p>
            </div>
          </ul>
        </div>
        <div className='flex z-50 justify-items-end h-20 justify-between place-items-center px-6   mx-auto'>
          {/* ************ */}
          {/* left side */}
          {/* logo menu item */}
          {/* ************ */}

          <div className='flex  gap-16 place-items-center'>
            <img className='w-[143px] h-[48px] z-100' src={logo} alt="" />
            <div className='hidden lg:block'>
              <ul className='flex gap-7'>
                <li className='text-[#393939] font-medium cursor-pointer leading-normal'>Trade</li>
                <li className='text-[#393939] font-medium cursor-pointer leading-normal'>Liquidity</li>
                <li className='text-[#393939] font-medium cursor-pointer leading-normal'>Limit</li>
                <li className='text-[#393939] font-medium cursor-pointer leading-normal'>More</li>
              </ul>
            </div>
          </div>

          {/* ************ */}
          {/* right side */}
          {/* icon, button icon */}
          {/* ************ */}
          <div className='flex gap-10 place-items-center font-semibold'>
            <div className='hidden lg:block'>

              <div className='flex  place-items-center gap-1.5'>
                <img className='' src={coin} alt="" />
                <p className='text-[##393939] '>$54343</p>
              </div>
            </div>

            <div className='flex gap-5 place-items-center justify-center'>

              <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="215" height="48" viewBox="0 0 215 48" fill="none">
                {/* <!-- White Background --> */}
                <rect width="100%" height="100%" fill="white" rx="24" ry="24" />

                {/* <!-- Gradient Path --> */}
                <path fillRule="evenodd" clipRule="evenodd" d="M196.057 3H18.9427C10.0502 3 2.84141 10.6112 2.84141 20V28C2.84141 37.3888 10.0502 45 18.9427 45H196.057C204.95 45 212.159 37.3888 212.159 28V20C212.159 10.6112 204.95 3 196.057 3ZM18.9427 0C8.48095 0 0 8.95431 0 20V28C0 39.0457 8.48095 48 18.9427 48H196.057C206.519 48 215 39.0457 215 28V20C215 8.9543 206.519 0 196.057 0H18.9427Z" fill="url(#paint0_linear_1158_13)" />

                {/* <!-- Gradient definition --> */}
                <defs>
                  <linearGradient id="paint0_linear_1158_13" x1="107.5" y1="0" x2="107.5" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#290059" />
                    <stop offset="1" stopColor="#FF971D" />
                  </linearGradient>
                </defs>

                {/* <!-- Text --> */}
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#272727" fontSize="18">Connect Wallet</text>
              </svg>

              <div className='hidden lg:block'>
                <img src={global} alt="" />
              </div>

              <div onClick={() => setShow(!show)} className='lg:hidden px-1 z-100 cursor-pointer'>
                <span>X</span>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Header;

