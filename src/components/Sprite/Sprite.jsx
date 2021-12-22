import sprite from "./icons.svg";

const Sprite = ({ id, width, height, ...props }) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={`${width}px`}
      height={`${height}px`}
      style={{ ...props.style }}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Sprite;
