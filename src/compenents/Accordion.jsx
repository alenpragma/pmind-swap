import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="flex px-3 flex-col lg:flex-row justify-center  gap-x-3 mx-auto mt-5 mb-10">


      {/*  */}
      <div className='min-w-[400px] max-w-[400px]'>

        <div className="mb-2 border-[1.5px] group border-[#1bae62] rounded-md">
          <div
            onClick={() => toggleAccordion(1)}
            className="w-full flex justify-between px-3  bg-white text-black py-3 rounded focus:outline-none"
          >
            <p>Lorem ipsum </p>
            <span>icon</span>
          </div>
          {activeIndex === 1 && (
            <div>
              <hr className='border-b-[1px] border-[#1bae62]' />
              <div className=" bg-white px-3 py-1  rounded">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat optio ex error quam nesciunt hic, non itaque officia dolores.</p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-2 border-[1.5px] group border-[#1bae62] rounded-md">
          <div
            onClick={() => toggleAccordion(2)}
            className="w-full flex justify-between px-3  bg-white text-black py-3 rounded focus:outline-none"
          >
            <p>Lorem ipsum </p>
            <span>icon</span>
          </div>
          {activeIndex === 2 && (
            <div>
              <hr className='border-b-[1px] border-[#1bae62]' />
              <div className=" bg-white px-3 py-1  rounded">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat optio ex error quam nesciunt hic, non itaque officia dolores.</p>
              </div>
            </div>
          )}
        </div>
        <div className="mb-2 border-[1.5px] group border-[#1bae62] rounded-md">
          <div
            onClick={() => toggleAccordion(3)}
            className="w-full flex justify-between px-3  bg-white text-black py-3 rounded focus:outline-none"
          >
            <p>Lorem ipsum </p>
            <span>icon</span>
          </div>
          {activeIndex === 3 && (
            <div>
              <hr className='border-b-[1px] border-[#1bae62]' />
              <div className=" bg-white px-3 py-1  rounded">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat optio ex error quam nesciunt hic, non itaque officia dolores.</p>
              </div>
            </div>
          )}
        </div>

      </div>


      <div className='min-w-[400px] max-w-[400px]'>

        <div className="mb-2 border-[1.5px] group border-[#1bae62] rounded-md">
          <div
            onClick={() => toggleAccordion(4)}
            className="w-full flex justify-between px-3  bg-white text-black py-3 rounded focus:outline-none"
          >
            <p>Lorem ipsum </p>
            <span>icon</span>
          </div>
          {activeIndex === 4 && (
            <div>
              <hr className='border-b-[1px] border-[#1bae62]' />
              <div className=" bg-white px-3 py-1  rounded">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat optio ex error quam nesciunt hic, non itaque officia dolores.</p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-2 border-[1.5px] group border-[#1bae62] rounded-md">
          <div
            onClick={() => toggleAccordion(5)}
            className="w-full flex justify-between px-3  bg-white text-black py-3 rounded focus:outline-none"
          >
            <p>Lorem ipsum </p>
            <span>icon</span>
          </div>
          {activeIndex === 5 && (
            <div>
              <hr className='border-b-[1px] border-[#1bae62]' />
              <div className=" bg-white px-3 py-1  rounded">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat optio ex error quam nesciunt hic, non itaque officia dolores.</p>
              </div>
            </div>
          )}
        </div>
        <div className="mb-2 border-[1.5px] group border-[#1bae62] rounded-md">
          <div
            onClick={() => toggleAccordion(6)}
            className="w-full flex justify-between px-3  bg-white text-black py-3 rounded focus:outline-none"
          >
            <p>Lorem ipsum </p>
            <span>icon</span>
          </div>
          {activeIndex === 6 && (
            <div>
              <hr className='border-b-[1px] border-[#1bae62]' />
              <div className=" bg-white px-3 py-1  rounded">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat optio ex error quam nesciunt hic, non itaque officia dolores.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Accordion;
