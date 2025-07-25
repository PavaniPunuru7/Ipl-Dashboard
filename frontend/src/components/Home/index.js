import { Component } from "react";
import { Oval } from "react-loader-spinner";

import TeamCard from "../TeamCard";

import "./index.css";

const teamsApiUrl = "https://ipl-dashboard-1-22ut.onrender.com/api/teams";

class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  };

  componentDidMount() {
    this.getTeams();
  }

  getTeams = async () => {
    const response = await fetch(teamsApiUrl);
    const fetchedData = await response.json();
    const formattedData = fetchedData.teams.map((team) => ({
      name: team.name,
      id: team.id,
      teamImageURL: team.team_image_url,
    }));

    this.setState({
      teamsData: formattedData,
      isLoading: false,
    });
  };

  renderTeamsList = () => {
    const { teamsData } = this.state;

    return (
      <ul className="teams-list">
        {teamsData.map((team) => (
          <li key={team.id}>
            <TeamCard key={team.id} teamDetails={team} />{" "}
          </li>
        ))}
      </ul>
    );
  };

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Oval color="#ffffff" height={50} width={50} />
    </div>
  );

  render() {
    const { isLoading } = this.state;

    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    );
  }
}

export default Home;
