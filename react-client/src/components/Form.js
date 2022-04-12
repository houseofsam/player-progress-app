import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Form = () => {
  const [communication, setCommunication] = useState("");
  const [leadership, setLeadership] = useState("");
  const [attitude, setAttitude] = useState("");
  const [handling, setHandling] = useState("");
  const [passing, setPassing] = useState("");
  const [penetrating, setPenetrating] = useState("");
  const [boxingOut, setBoxingOut] = useState("");
  
  const [playerCommunication, setPlayerCommunication] = useState(7);
  const [playerLeadership, setPlayerLeadership] = useState(6);
  const [playerAttitude, setPlayerAttitude] = useState(3);
  const [playerHandling, setPlayerHandling] = useState(7);
  const [playerPassing, setPlayerPassing] = useState(7);
  const [playerPenetrating, setPlayerPenetrating] = useState(2);
  const [playerBoxingOut, setPlayerBoxingOut] = useState(3);

  const data = [
    { name: "Communication", coachScore: communication, playerScore: playerCommunication, amt: 2400 },
    { name: "Leadership", coachScore: leadership, playerScore: playerLeadership, amt: 2400 },
    { name: "Attitude", coachScore: attitude, playerScore: playerAttitude, amt: 2400 },
    { name: "Ball Handling", coachScore: handling, playerScore: playerHandling, amt: 2400 },
    { name: "Passing", coachScore: passing, playerScore: playerPassing, amt: 2400 },
    { name: "Penetrating", coachScore: penetrating, playerScore: playerPenetrating, amt: 2400 },
    { name: "Boxing Out", coachScore: boxingOut, playerScore: playerBoxingOut, amt: 2400 },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <h2>Team Skills</h2>
        <label htmlFor="communication">Player Communication Skills</label>
        <br></br>
        <input
          type="number"
          min="1"
          max="10"
          name="communication"
          required
          placeholder=""
          value={communication}
          onChange={(e) => setCommunication(e.target.value)}
        />
        <br></br>
        <label htmlFor="leadership">Player Leadership Abilities</label>
        <br></br>
        <input
          type="number"
          min="1"
          max="10"
          name="leadership"
          required
          placeholder=""
          value={leadership}
          onChange={(e) => setLeadership(e.target.value)}
        />
        <br></br>
        <label htmlFor="attitude">Player Attitude</label>
        <br></br>
        <input
          type="number"
          min="1"
          max="10"
          name="attitude"
          required
          placeholder=""
          value={attitude}
          onChange={(e) => setAttitude(e.target.value)}
        />

        <h2>Basketball Skills</h2>
        <label htmlFor="handling">Ball Handling</label>
        <br></br>
        <input
          type="number"
          min="1"
          max="10"
          name="handling"
          required
          placeholder=""
          value={handling}
          onChange={(e) => setHandling(e.target.value)}
        />
        <br></br>
        <label htmlFor="passing">Passing</label>
        <br></br>
        <input
          type="number"
          min="1"
          max="10"
          name="passing"
          required
          placeholder=""
          value={passing}
          onChange={(e) => setPassing(e.target.value)}
        />
        <br></br>
        <label htmlFor="penetrating">Penetrating Skills</label>
        <br></br>
        <input
          type="number"
          min="1"
          max="10"
          name="penetrating"
          required
          placeholder=""
          value={penetrating}
          onChange={(e) => setPenetrating(e.target.value)}
        />
        <br></br>
        <label htmlFor="boxingOut">Boxing Out</label>
        <br></br>
        <input
          type="number"
          min="1"
          max="10"
          name="boxingOut"
          required
          placeholder=""
          value={boxingOut}
          onChange={(e) => setBoxingOut(e.target.value)}
        />
        
      </form>
      <div>
        <h1>Results</h1>
        {/* <h3>Communication: {communication}</h3>
        <h3>Leadership: {leadership}</h3>
        <h3>Attitude: {attitude}</h3> */}
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="coachScore" stroke="blue" />
          <Line type="monotone" dataKey="playerScore" stroke="red" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};
