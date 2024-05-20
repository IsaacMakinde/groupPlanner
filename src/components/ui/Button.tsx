const Button = ({ onClick, label, styling }) => {
  return (
    <button className={styling} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
