
import facebook from '../assets/socialicon/facebook_logo.png';
import x from '../assets/socialicon/x.png';
import reddit from '../assets/socialicon/reddit.png';

import telegram from '../assets/socialicon/telegram_logo.png';
import instagram from '../assets/socialicon/instagram_logo.png';
import linkedin from '../assets/socialicon/linkedin_icon.png';

const Footer = () => {
  return (
    <div className=' bg-[#B6B6B6] mt-[18px]'>
      <div className='mx-auto flex justify-center pt-8 pb-6'>

        <div>
          <h2 className='text-primary text-2xl mb-[23px] text-center font-medium'>Join Our Community</h2>
          <div className='flex gap-[13px]'>
            <img className='w-[50px] h-[50px] bg-[#C7EAFF] rounded-[10px] p-2' src={facebook} alt="" />
            <img className='w-[50px] h-[50px] bg-[#C7EAFF] rounded-[10px] p-2' src={x} alt="" />
            <img className='w-[50px] h-[50px] bg-[#FFC3AD] rounded-[10px] p-2' src={reddit} alt="" />
            <img className='w-[50px] h-[50px] bg-[#AFE8FF] rounded-[10px] p-2' src={telegram} alt="" />
            <img className='w-[50px] h-[50px] bg-gradient-to-r from-[#FDD1FB] via-[#FFD6FC ] to-[#FAC8C9] rounded-[10px] p-2' src={instagram} alt="" />
            <img className='w-[50px] h-[50px] bg-[#D7F1FD]  rounded-[10px] p-2' src={linkedin} alt="" />
          </div>
        </div>
        {/* <div className='mt-3 mb-11'>
            <h2 className='text-primary  text-lg font-medium pb-0.5'>About Mindchain</h2>
            <ul className='text-[#707070] text-[16px] font-medium'>
              <li className='pb-[5px]'>Contact</li>
              <li className='pb-[5px]'>About</li>
              <li className='pb-[5px]'>Blog</li>
            </ul>
          </div> */}
      </div>
      <div className='bg-[#A5A5A5] font-medium border-t-[#515151] text-[#525252] py-6'>
        <p className='text-center text-sm'>All Right Resarved Mindchain 2024</p>
      </div>
    </div>
  );
};

export default Footer;