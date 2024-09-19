const LoginStatus = ({ status }) => {
  return (
    <div
      className="absolute bg-green-600 rounded-full flex justify-center items-center -bottom-0 -right-0 font-bold "
      style={{
        height: status,
        width: status,
      }}
    ></div>
  );
};

export default LoginStatus;
