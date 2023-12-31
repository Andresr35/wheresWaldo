import Nav from "../components/Nav";
import useRankings from "../hooks/useRankings";
import PropTypes from "prop-types";

const Leaderboard = ({ url }) => {
  const rankings = useRankings(url);
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

Leaderboard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Leaderboard;
