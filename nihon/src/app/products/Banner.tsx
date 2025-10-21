export default function Banner() {
  return (
    <div
      className="bg-[#ED3135] h-auto shadow-sm w-full flex justify-around pt-7.5 pb-2.5">
      <div style={{ backgroundImage: "url('/images/logoBannerProductPage.png')" }} className="bg-cover bg-center h-15 w-40 mb-6 "></div>

      <p className="text-white pt-2.5 text-[12px] w-32  text-justify   font-bold">
        TUDO QUE VOCÊ PRECISA PARA O SEU NEGÓCIO!
      </p>
    </div>
  );
}
