import { useRef, useState } from "react";
import Nav from "../components/Nav";
import CharacterDropdown from "../components/CharacterDropdown";

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
      <div style={{ position: "relative" }}>
        {showDropdown && (
          <CharacterDropdown
            coord={coord}
            clientHeight={clientHeight.current}
            clientWidth={clientWidth.current}
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
