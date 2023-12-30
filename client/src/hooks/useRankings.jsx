import { useEffect, useState } from "react";

const useRankings = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const getRanking = async () => {
      const rankingResults = await fetch(
        "http://localhost:3000/api/user/users"
      );
      const rankingData = await rankingResults.json();
      setRankings(rankingData.allGames);
    };
    getRanking();
  }, []);

  return rankings;
};

export default useRankings;
