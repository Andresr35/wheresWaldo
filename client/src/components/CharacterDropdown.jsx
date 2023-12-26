import PropTypes from "prop-types";

const CharacterDropdown = ({ coord, clientHeight, clientWidth, game }) => {
  const validateClick = async (character) => {
    try {
      console.log(
        `Validating whether ${character} is at [${coord[0] / clientWidth} , ${
          coord[1] / clientHeight
        }] on ${game}`
      );
      const res = await fetch(
        `http://localhost:3000/api/game/${game}/${character}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            coord: [coord[0] / clientWidth, coord[1] / clientHeight],
            userID: localStorage.getItem("userID"),
          }),
        }
      );

      const result = await res.json();
      console.log(result);
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
  game: PropTypes.string.isRequired,
};

export default CharacterDropdown;
