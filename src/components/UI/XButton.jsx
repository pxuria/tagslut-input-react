const XButton = ({ onClick, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="x"
      onClick={onClick}
      className={className}
      style={{ color: "white", fill: "white" }}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="200"
        x2="56"
        y1="56"
        y2="200"
        fill="none"
        stroke="#f8f9fa"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></line>
      <line
        x1="200"
        x2="56"
        y1="200"
        y2="56"
        fill="none"
        stroke="#f8f9fa"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      ></line>
    </svg>
  );
};

export default XButton;
