import { useEffect, useState } from "react";

const Mind = () => {
  const [blocks, setBlocks] = useState();
  const [transactions, setTransactions] = useState();


  useEffect(() => {
    fetch('https://mainnet.mindscan.info/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg')
      .then((res) => res.json())
      .then((data) => setBlocks(data));
  }, []);

  console.log(blocks);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://mainnet.mindscan.info/api/v2/transactions";

        const response = await fetch(`${apiUrl}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setTransactions(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts
  console.log(transactions?.items.length);

  let totalBlock = 0;
  blocks?.items?.map((block) => {
    return totalBlock += +block?.size;
  });
  console.log(transactions);
  let time = 0;
  transactions.items.map((item) => {
    time += +item.confirmation_duration[1];

  });
  const durationInMilliseconds = time / transactions.items.length;
  const durationInSeconds = durationInMilliseconds / 1000;

  console.log("Duration in seconds:", durationInSeconds);

  return (
    <div className="max-w-[1140px] flex justify-center mx-auto mt-[18px]">


      <div className=" flex flex-auto flex-col items-center lg:flex-row justify-between gap-4">
        <div className="border-[1px] w-[360px] px-4 md:w-[350px] bg-[#EDEDED] border-[#B6B6B6]  py-5  rounded-lg text-primary font-medium text-lg ">
          <p>Total blocks</p>
          <p className="font-semibold">{totalBlock.toLocaleString()}</p>
        </div>
        <div className="border-[1px] w-[360px] px-4 md:w-[350px] bg-[#EDEDED] border-[#B6B6B6]  py-5  rounded-lg text-primary font-medium text-lg ">
          <p>Average block time</p>
          <p className="font-semibold">{durationInSeconds} s</p>
        </div>
        <div className="border-[1px] w-[360px] px-4 md:w-[350px] bg-[#EDEDED] border-[#B6B6B6]  py-5  rounded-lg text-primary font-medium text-lg ">
          <p>Total transactions</p>
          <p className="font-semibold">{transactions?.next_page_params?.block_number}</p>
        </div>
      </div>



    </div>
  );
};

export default Mind;
