const Arrow = ({ onClick, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="arrow"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 29 29"
      xml:space="preserve"
      onClick={onClick}
      style={style}
    >
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="m20.5 11.5-6 6-6-6"
      ></path>
    </svg>
  );
};

export default Arrow;
