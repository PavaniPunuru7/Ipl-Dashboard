import "./index.css";
import { Link } from "react-router-dom";

const TeamCard = (props) => {
  const { teamDetails } = props;
  const { name, id, teamImageURL } = teamDetails;

  return (
    <li className="team-item">
      <Link to={`/team/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  );
};

export default TeamCard;
