import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useCharacters from "../hooks/useCharacters";

const CharacterDropdown = ({ coord, clientHeight, clientWidth, game }) => {
  const navigate = useNavigate();
  const { foundCharacters, setFoundCharacters } = useCharacters(game);

  const finishGame = async () => {
    const res = await fetch("http://localhost:3000/api/game/finish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        finishTime: Date.now(),
        userID: localStorage.getItem("userID"),
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result._doc.finished) navigate("/leaderboard");
    else console.log("What happened?");
  };

  const validateClick = async (character) => {
    if (game == "tutorial") return;
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

      if (result.found) {
        if (result.foundCharacters.foundEveryone) {
          switch (game) {
            case "firstGame":
              navigate("/gameTwo");
              break;
            case "secondGame":
              navigate("/gameThree");
              break;
            case "thirdGame":
              finishGame();
              break;
            default:
              console.log("What game are we on? Maybe tutorial?");
              break;
          }
        } else {
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
