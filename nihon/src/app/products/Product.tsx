"use client";

import { useRouter } from "next/navigation";

type ProductProps = {
  name: string;
};

export default function Product({ name }: ProductProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="
      flex flex-col 
      w-[130px] 
      min-[375px]:w-[138px] 
      min-[390px]:w-[146px]
      min-[405px]:w-[154px]
      min-[420px]:w-[162px]">
      
      <div onClick={handleClick} className="
          h-[130px] w-[130px]
          min-[375px]:h-[138px] min-[375px]:w-[138px]
          min-[390px]:h-[146px] min-[390px]:w-[146px] 
          min-[405px]:h-[154px] min-[405px]:w-[154px]
          min-[420px]:h-[162px] min-[420px]:w-[162px]
          bg-gray-200 
          bg-cover 
          bg-center
          shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
          rounded-3xl
          transition-transform hover:scale-105 cursor-pointer
        "
      ></div>

      <p className="
      text-center 
      text-nowrap 
      overflow-hidden 
      overflow-ellipsis 
      text-[10px] 
      min-[375px]:text-[11.5px] 
      min-[390px]:text-[13px] 
      min-[405px]:text-[14.5px] 
      min-[420px]:text-[16px] 
      py-3  
      text-black 
      w-[130px]
      min-[375px]:w-[138px] 
      min-[390px]:w-[146px]  
      min-[405px]:w-[154px] 
      min-[420px]:w-[162px] 
      ">
        {name}
      </p>

  <div className="
  flex 
  justify-center 
  items-center 
  gap-[5px]
  min-[375px]:gap-[7.5px]

  w-full">
        <button
          onClick={handleClick}
          className="
            flex 
            items-center 
            justify-center 
            px-[10px] py-[5px] text-[8px]
            min-[375px]:px-[12.5px] min-[375px]:py-[7.5px] min-[375px]:text-[9.5px]
            min-[390px]:text-[10.5px]
            rounded-full
            text-nowrap
            shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
            bg-[#ED3135]
            text-white
            transition-transform hover:scale-105
          ">
          Saiba mais
        </button>

        <a href="#" className="
            text-[8px]
            min-[375px]:text-[9.5px]
            min-[390px]:text-[10.5px]
            text-nowrap
            text-[#ED3135]
            transition-transform hover:scale-105
          ">
          Fazer pedido
        </a>
      </div>
    </div>
  );
}
