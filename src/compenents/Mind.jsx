import { useEffect, useState } from "react";

const Mind = () => {
  const [blocks, setBlocks] = useState();
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    fetch('https://mainnet.mindscan.info/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg')
      .then((res) => res.json())
      .then((data) => setBlocks(data));
  }, []);

  useEffect(() => {
    fetch('https://mainnet.mindscan.info/api/v2/transactions?filter=pending%20%7C%20validated&type=token_transfer%2Ccontract_creation%2Ccontract_call%2Ccoin_transfer%2Ctoken_creation&method=approve%2Ctransfer%2Cmulticall%2Cmint%2Ccommit')
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);


  let totalBlock = 0;
  blocks?.items?.map((block) => {
    return totalBlock += +block?.size;
  });
  console.log(transactions);

  return (
    <div className="max-w-[1140px] flex justify-center mx-auto mt-[18px]">


      <div className=" flex flex-auto flex-col items-center lg:flex-row justify-between gap-4">
        <div className="border-[1px] w-[360px] px-4 md:w-[350px] bg-[#EDEDED] border-[#B6B6B6]  py-5  rounded-lg text-primary font-medium text-lg ">
          <p>Total blocks</p>
          <p className="font-semibold">{totalBlock.toLocaleString()}</p>
        </div>
        <div className="border-[1px] w-[360px] px-4 md:w-[350px] bg-[#EDEDED] border-[#B6B6B6]  py-5  rounded-lg text-primary font-medium text-lg ">
          <p>Average block time</p>
          <p className="font-semibold">30947090</p>
        </div>
        <div className="border-[1px] w-[360px] px-4 md:w-[350px] bg-[#EDEDED] border-[#B6B6B6]  py-5  rounded-lg text-primary font-medium text-lg ">
          <p>Total transactions</p>
          <p className="font-semibold">30947090</p>
        </div>
      </div>



    </div>
  );
};

export default Mind;
