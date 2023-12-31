import { useEffect, useState } from "react";

const useCharacters = (game, url) => {
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
        `${url}/api/user/${localStorage.getItem("userID")}`
      );
      const result = await res.json();
      console.log(result);
      setFoundCharacters(result._doc.game[game]);
    };
    fetchUser();
  }, [game, url]);
  return { foundCharacters, setFoundCharacters };
};

export default useCharacters;
