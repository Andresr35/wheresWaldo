import Nav from "../components/Nav";
import useRankings from "../hooks/useRankings";

const Leaderboard = () => {
  const rankings = useRankings();
  return (
    <>
      <Nav />
      <table className="leaderboardContainer">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((rank, index) => (
            <tr key={index}>
              <td>{rank.user.name}</td>
              <td>{rank.finishTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
