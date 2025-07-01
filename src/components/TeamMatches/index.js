import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";

import "./index.css";

const teamMatchesApiUrl = "http://localhost:4000/api/team_matches/";

const TeamMatches = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [teamMatchesData, setTeamMatchesData] = useState({});

  const getFormattedData = (data) => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  });

  useEffect(() => {
    const getTeamMatches = async () => {
      const response = await fetch(`${teamMatchesApiUrl}${id}`);
      const fetchedData = await response.json();

      const formattedData = {
        teamBannerURL: fetchedData.team_banner_url,
        latestMatch: getFormattedData(fetchedData.latest_match_details),
        recentMatches: fetchedData.recent_matches.map((match) =>
          getFormattedData(match)
        ),
      };

      setTeamMatchesData(formattedData);
      setIsLoading(false);
    };

    getTeamMatches();
  }, [id]);

  const getRouteClassName = () => {
    switch (id) {
      case "RCB":
        return "rcb";
      case "KKR":
        return "kkr";
      case "KXP":
        return "kxp";
      case "CSK":
        return "csk";
      case "RR":
        return "rr";
      case "MI":
        return "mi";
      case "SH":
        return "srh";
      case "DC":
        return "dc";
      default:
        return "";
    }
  };

  const renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Oval color="#ffffff" height={50} width={50} />
    </div>
  );

  const renderTeamMatches = () => {
    const { teamBannerURL, latestMatch, recentMatches } = teamMatchesData;

    return (
      <div className="responsive-container">
        <img src={teamBannerURL} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchData={latestMatch} />
        <ul className="recent-matches-list">
          {recentMatches.map((match) => (
            <MatchCard key={match.id} matchDetails={match} />
          ))}
        </ul>
      </div>
    );
  };

  const className = `team-matches-container ${getRouteClassName()}`;

  return (
    <div className={className}>
      {isLoading ? renderLoader() : renderTeamMatches()}
    </div>
  );
};

export default TeamMatches;
