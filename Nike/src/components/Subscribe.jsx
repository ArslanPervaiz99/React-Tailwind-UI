import MyButton from "./MyButton";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        {" "}
        Sign Up Form <span className="text-coral-red"> Updates </span> &
        Newsletters
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 sm:flex sm:border-slate-gray sm:border rounded-full max-sm:flex-col">
        <input type="text" className="input" placeholder="Subscribe@nike.com" />
        <div className=" flex max-sm:justify-end items-center max-sm:w-full">
          <MyButton fullWidth label="Sign Up" />{" "}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
