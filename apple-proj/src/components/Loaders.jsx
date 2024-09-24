import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute flex top-0 w-full items-center justify-center left-0 h-full">
        <div className="rounded-full w-[10vw] h-[10vw]">Loading</div>
      </div>
    </Html>
  );
};

export default Loader;
