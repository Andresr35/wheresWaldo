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
      const res = await fetch(
        `http://localhost:3000/api/user/${localStorage.getItem("userID")}`
      );
      const result = await res.json();
      setFoundCharacters(result.result.game[game]);
    };
    fetchUser();
  }, [game]);
  return { foundCharacters, setFoundCharacters };
};

export default useCharacters;
