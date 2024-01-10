import logo from '../assets/logo.png';
import coin from '../assets/mind1.png';
import global from '../assets/globe1.png';


const Header = () => {
  return (
    <div className='bg-[#EDEDED] w-[1140px] mx-auto text-primary  '>
      <div className='  mx-auto '>
        <div className='flex justify-items-end h-20 justify-between place-items-center px-6 border mx-auto'>
          <div className='flex gap-16'>
            <img className='w-[177px] h-[28px]' src={logo} alt="" />
            <div>
              <ul className='flex gap-7'>
                <li className='text-[#393939] font-medium leading-normal'>Trade</li>
                <li className='text-[#393939] font-medium leading-normal'>Liquidity</li>
                <li className='text-[#393939] font-medium leading-normal'>Limit</li>
                <li className='text-[#393939] font-medium leading-normal'>More</li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className='flex gap-10 font-semibold'>
            <div className='flex  place-items-center gap-1.5'>
              <img className='' src={coin} alt="" />
              <p className='text-[##393939] '>$54343</p>
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

              <img src={global} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

