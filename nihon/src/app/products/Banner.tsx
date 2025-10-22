export default function Banner() {
  return (
    <div 
      className="bg-[#ED3135] h-auto shadow-sm w-full flex justify-between py-10 md:py-15 md:px-[10px] lg:px-[15px] lg:py-20 xl:px-[30px] xl:py-25">
      <div style={{ backgroundImage: "url('/images/logoBannerProductPage.png')" }} className="bg-cover bg-center h-15 w-40 ml-4 sm:ml-6"></div>

      <p className="text-white pt-2.5 text-[12px] sm:text-[13px] md:text-[16px] w-32 sm:w-45 md:w-60 text-justify font-bold mr-4 sm:mr-6">
        TUDO QUE VOCÊ PRECISA PARA O SEU NEGÓCIO!
      </p>
    </div>
  );
}
