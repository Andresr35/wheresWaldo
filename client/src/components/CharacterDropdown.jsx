import PropTypes from "prop-types";

const CharacterDropdown = ({ coord, clientHeight, clientWidth }) => {
  const validateClick = (character) => {
    try {
      console.log(
        `Validating whether ${character} is at [${coord[0] / clientWidth} , ${
          coord[1] / clientHeight
        }]`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="dropDown" style={{ top: coord[1], left: coord[0] }}>
      <img
        onClick={() => validateClick("odlaw")}
        className="character"
        src="../../odlaw.png"
        alt="odlaw"
      />
      <img
        onClick={() => validateClick("wizard")}
        className="character"
        src="../../wizard.png"
        alt="wizard"
      />
      <img
        onClick={() => validateClick("wenda")}
        className="character"
        src="../../wenda.png"
        alt="wenda"
      />
      <img
        onClick={() => validateClick("waldo")}
        className="character"
        src="../../waldoChar.png"
        alt="waldo"
      />
    </div>
  );
};

CharacterDropdown.propTypes = {
  coord: PropTypes.array.isRequired,
  clientHeight: PropTypes.number.isRequired,
  clientWidth: PropTypes.number.isRequired,
};

export default CharacterDropdown;
