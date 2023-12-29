import { useRef, useState } from "react";
import Nav from "../components/Nav";
import CharacterDropdown from "../components/CharacterDropdown";

const SecondMap = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [coord, setCoord] = useState([]);

  const clientWidth = useRef(0);
  const clientHeight = useRef(0);

  const dropDownControl = async (e) => {
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
    <div onClick={dropDownControl}>
      <Nav />
      This should be the second game
      <div style={{ position: "relative" }}>
        {showDropdown && (
          <CharacterDropdown
            coord={coord}
            clientHeight={clientHeight.current}
            clientWidth={clientWidth.current}
            game="secondGame"
          />
        )}
        <img
          className="waldoImage"
          src="../../waldoAtTheBeach.jpg"
          alt="Waldo example"
        />
      </div>
    </div>
  );
};

export default SecondMap;
