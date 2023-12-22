import { useState } from "react";
import Nav from "../components/Nav";
import CharacterDropdown from "../components/CharacterDropdown";

const Home = () => {
  const [coord, setCoord] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropDownControl = (e) => {
    e.preventDefault();
    console.log(e);
    if (
      e.target.className !== "waldoImage" &&
      showDropdown &&
      e.target.className !== "dropDown"
    ) {
      setShowDropdown(false);
    } else if (
      e.target.className == "waldoImage" &&
      e.target.className !== "dropDown"
    ) {
      setShowDropdown(true);
      setCoord([
        // These would be the coords to send to the server, but not where to render the dropdown
        // e.nativeEvent.offsetX / e.target.clientWidth,
        // e.nativeEvent.offsetY / e.target.clientHeight,
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY,
      ]);
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
        {showDropdown && <CharacterDropdown coord={coord} />}
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
