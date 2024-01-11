import coin from '../assets/mind1.png';


const MenuItem = () => {
  return (
    <div className='flex flex-col bg-black gap-32 lg:flex-row '>
      <ul className='flex flex-col lg:flex-row gap-7'>
        <li className='text-[#393939] font-medium leading-normal'>Trade</li>
        <li className='text-[#393939] font-medium leading-normal'>Liquidity</li>
        <li className='text-[#393939] font-medium leading-normal'>Limit</li>
        <li className='text-[#393939] font-medium leading-normal'>More</li>
      </ul>
      <div className='flex  place-items-center gap-1.5'>
        <img className='' src={coin} alt="" />
        <p className='text-[##393939] '>$54343</p>
      </div>
    </div>
  );
};

export default MenuItem;

{/* <div className='flex gap-10 place-items-center font-semibold'>
<div className='flex gap-5 place-items-center justify-center'>
  <ConnectButton />
  <div className='hidden lg:block'>
    <img src={global} alt="" />
  </div>

   <div onClick={() => setShow(!show)} className='lg:hidden px-1 cursor-pointer'>
    <span>X</span>
  </div>

</div>
</div> */}