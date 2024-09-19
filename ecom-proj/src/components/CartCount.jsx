const CartCount = ({ size, count }) => {
  return (
    <div
      className="absolute bg-red-600 text-white rounded-full flex justify-center items-center -top-2 -right-2 font-bold text-[12px]"
      style={{
        height: size,
        width: size,
      }}
    >
      {count}
    </div>
  );
};

export default CartCount;
