import { useEffect, useState } from "react";

const useCharacters = (game) => {
  const [foundCharacters, setFoundCharacters] = useState({
    foundWaldo: false,
    foundWenda: false,
    foundWizard: false,
    foundOdlaw: false,
  });
  useEffect(() => {
    const fetchUser = async () => {
      if (game == "tutorial") return;
      const res = await fetch(
        `http://localhost:3000/api/user/${localStorage.getItem("userID")}`
      );
      const result = await res.json();
      console.log(result);
      setFoundCharacters(result._doc.game[game]);
    };
    fetchUser();
  }, [game]);
  return { foundCharacters, setFoundCharacters };
};

export default useCharacters;
