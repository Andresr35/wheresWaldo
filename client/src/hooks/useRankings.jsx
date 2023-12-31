import { useEffect, useState } from "react";

const useRankings = (url) => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const getRanking = async () => {
      const rankingResults = await fetch(`${url}/api/user/users`);
      const rankingData = await rankingResults.json();
      setRankings(rankingData.allGames);
    };
    getRanking();
  }, []);

  return rankings;
};

export default useRankings;
