import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterDropdown = ({ coord, clientHeight, clientWidth, game }) => {
  const [foundCharacters, setFoundCharacters] = useState({
    foundWaldo: false,
    foundWenda: false,
    foundWizard: false,
    foundOdlaw: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `http://localhost:3000/api/user/${localStorage.getItem("userID")}`
      );
      const result = await res.json();
      setFoundCharacters(result.result.game[game]);
    };
    fetchUser();
  }, [game]);

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

      if (result.found) {
        if (result.foundCharacters.foundEveryone) {
          console.log("redirecting");
          navigate("/gameTwo");
        } else {
          console.log("found one");
          setFoundCharacters(result.foundCharacters);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dropDown" style={{ top: coord[1], left: coord[0] }}>
      {!foundCharacters.foundOdlaw && (
        <img
          onClick={() => validateClick("odlaw")}
          className="character"
          src="../../odlaw.png"
          alt="odlaw"
        />
      )}
      {!foundCharacters.foundWizard && (
        <img
          onClick={() => validateClick("wizard")}
          className="character"
          src="../../wizard.png"
          alt="wizard"
        />
      )}
      {!foundCharacters.foundWenda && (
        <img
          onClick={() => validateClick("wenda")}
          className="character"
          src="../../wenda.png"
          alt="wenda"
        />
      )}
      {!foundCharacters.foundWaldo && (
        <img
          onClick={() => validateClick("waldo")}
          className="character"
          src="../../waldoChar.png"
          alt="waldo"
        />
      )}
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
