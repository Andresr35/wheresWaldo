import { useRef, useState } from "react";
import Nav from "../components/Nav";
import CharacterDropdown from "../components/CharacterDropdown";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ url }) => {
  const [name, setName] = useState("user");
  const [coord, setCoord] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const clientWidth = useRef(0);
  const clientHeight = useRef(0);
  const navigate = useNavigate();

  const dropDownControl = (e) => {
    e.preventDefault();
    if (
      e.target.className !== "waldoImage" &&
      showDropdown &&
      e.target.className !== "dropDown" &&
      e.target.className !== "character"
    ) {
      setShowDropdown(false);
    } else if (
      e.target.className == "waldoImage" &&
      e.target.className !== "dropDown"
    ) {
      clientWidth.current = e.target.clientWidth;
      clientHeight.current = e.target.clientHeight;
      setShowDropdown(true);
      setCoord([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    }
  };

  const startGame = async () => {
    if (!localStorage.getItem("userID")) {
      // User does not exist
      const startResults = await fetch(`${url}/api/game/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: Date.now(),
          name: name,
        }),
      });
      const startData = await startResults.json();
      localStorage.setItem("userID", startData.user._doc._id);
    } else {
      const userResults = await fetch(
        `${url}/api/user/${localStorage.getItem("userID")}`
      );
      const userData = await userResults.json();
      console.log(userData);
      if (userData._doc.game.finished) {
        localStorage.removeItem("userID");
        const startResults = await fetch(`${url}/api/game/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: Date.now(),
            name: name,
          }),
        });
        const startData = await startResults.json();
        console.log(startData);
        localStorage.setItem("userID", startData.user._doc._id);
      } else {
        if (userData._doc.game.firstGame.foundEveryone) {
          if (userData._doc.game.secondGame.foundEveryone) {
            navigate("/gameThree");
          } else navigate("/gameTwo");
        }
      }
    }
  };

  return (
    <main onClick={dropDownControl}>
      <Nav />
      <h2>Welcome to my game!</h2>
      <h4>Description</h4>
      <p>
        This a photo tagging game. In order to get higher on the leaderboard,
        you have to find Waldo and his friends as fast as you can! Here is an
        example.
      </p>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
      </label>

      <Link to="/gameOne" onClick={startGame}>
        {!localStorage.getItem("userID") ? "Start" : "Continue"}
      </Link>
      <div style={{ position: "relative" }}>
        {showDropdown && (
          <CharacterDropdown
            coord={coord}
            clientHeight={clientHeight.current}
            clientWidth={clientWidth.current}
            game="tutorial"
            url={url}
            foundCharacters={{
              foundWaldo: false,
              foundWenda: false,
              foundWizard: false,
              foundOdlaw: false,
            }}
          />
        )}
        <img
          className="waldoImage"
          src="../../WaldoCharacters.jpg"
          alt="Waldo example"
        />
      </div>
    </main>
  );
};
Home.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Home;
