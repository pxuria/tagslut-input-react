const Arrow = ({ onClick, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="arrow"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 29 29"
      xmlSpace="preserve"
      onClick={onClick}
      className={className}
      style={{ transition: "all 0.25s ease" }}
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="m20.5 11.5-6 6-6-6"
      ></path>
    </svg>
  );
};

export default Arrow;
