import "./speak-button.css";
function AlertButton(props) {
  const { message } = props;
  const YEP = () => {
    alert(message);
  };
  return (
    <button className="speak-button" onClick={YEP}>
      Test "{message}"
    </button>
  );
}

export default AlertButton;
