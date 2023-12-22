import PropTypes from "prop-types";

const CharacterDropdown = ({ coord }) => {
  return (
    <div className="dropDown" style={{ top: coord[1], left: coord[0] }}>
      <img src="../../odlaw.png" alt="odlaw" />
      <img src="../../wizard.png" alt="wizard" />
      <img src="../../wenda.png" alt="wenda" />
      <img src="../../waldoChar.png" alt="waldo" />
    </div>
  );
};

CharacterDropdown.propTypes = {
  coord: PropTypes.array.isRequired,
};

export default CharacterDropdown;
