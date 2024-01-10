
import facebook from '../assets/socialicon/facebook_logo.png';
import x from '../assets/socialicon/x.png';
import reddit from '../assets/socialicon/reddit.png';

import telegram from '../assets/socialicon/telegram_logo.png';
import instagram from '../assets/socialicon/instagram_logo.png';
import linkedin from '../assets/socialicon/linkedin_icon.png';

const Footer = () => {
  return (
    <div>
      <div>
        <h2 className='text-primary text-2xl font-medium'>Join Our Community</h2>
        <div className='flex gap-[13px]'>
          <img className='w-[50px] h-[50px] bg-[#C7Dfff] rounded-[10px]' src={facebook} alt="" />
          <img className='w-[50px] h-[50px] bg-[#C7Dfff] rounded-[10px]' src={x} alt="" />
          <img className='w-[50px] h-[50px] bg-[#C7Dfff] rounded-[10px]' src={reddit} alt="" />
          <img className='w-[50px] h-[50px] bg-[#C7Dfff] rounded-[10px]' src={telegram} alt="" />
          <img className='w-[50px] h-[50px] bg-[#C7Dfff] rounded-[10px]' src={instagram} alt="" />
          <img className='w-[50px] h-[50px] bg-[#C7Dfff] rounded-[10px]' src={linkedin} alt="" />
        </div>
        <div>
          <h2 className='text-primary text-lg font-medium'>About Mindchain</h2>
          <ul className='text-[#4707070]'>
            <li>Contact</li>
            <li>About</li>
            <li>Blog</li>
          </ul>

        </div>
      </div>
      <div className='bg-[#A5A5A5] text-[#525252] py-6'>
        <p>All Right Resarved Mindchain 2024</p>
      </div>
    </div>
  );
};

export default Footer;