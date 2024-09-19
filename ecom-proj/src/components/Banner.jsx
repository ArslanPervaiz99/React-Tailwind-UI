const Banner = () => {
  return (
    <>
      <div className="flex gap-6 items-center pt-6  justify-center rounded-full">
        <img
          src="/banner_1.webp"
          alt="Banner Img"
          className="hover:scale-95 transition-transform"
        />
        <img
          src="/banner_2.webp"
          alt="Banner Img"
          className="hover:scale-95 transition-transform"
        />
      </div>
    </>
  );
};

export default Banner;
