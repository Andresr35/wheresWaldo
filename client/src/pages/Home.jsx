import { useRef, useState } from "react";
import Nav from "../components/Nav";
import CharacterDropdown from "../components/CharacterDropdown";
import { Link } from "react-router-dom";

const Home = () => {
  const [coord, setCoord] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const clientWidth = useRef(0);
  const clientHeight = useRef(0);

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
    const date = new Date();
    if (!localStorage.getItem("userID")) {
      // User does not exist
      const res = await fetch("http://localhost:3000/api/game/start", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({
          date: date,
        }),
      });
      const result = await res.json();
      localStorage.setItem("userID", result.user._id);
      // setFoundCharacters(result.result.game.firstGame);
    } else {
      // is game finished? if not continue else create a new user
      const res = await fetch(
        `http://localhost:3000/api/user/${localStorage.getItem("userID")}`
      );
      await res.json();
      // setFoundCharacters(result.result.game.firstGame);
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

export default Home;
