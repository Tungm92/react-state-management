import { useState } from 'react';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (newFighter) => {
    if (money > newFighter.price) {
      setTeam([...team, newFighter]);
      setMoney(money - newFighter.price);
      setTotalStrength(totalStrength + newFighter.strength)
      setTotalAgility(totalAgility + newFighter.agility)
    } else {
      console.log("Not enough money")
    }
  }

  const handleRemoveFighter = (removeFighter, idx) => {
    setTeam(team.filter(( _ , i) => i !== idx))
    setMoney(money + removeFighter.price);
    setTotalStrength(totalStrength - removeFighter.strength)
    setTotalAgility(totalAgility - removeFighter.agility)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team</h2>
        <div className='container'>
          {team.length === 0 ? 'Pick some team members' : 
          team.map((teamFighter, idx) => (
            <div className='fighterCard' key={idx}>
              <ul>
                <img src={teamFighter.img}></img>
                <li>{teamFighter.name}</li> 
                <li>Price: {teamFighter.price}</li>
                <li>Strength: {teamFighter.strength}</li>
                <li>Agility: {teamFighter.agility}</li>
              </ul>
              <button onClick={() => handleRemoveFighter(teamFighter, idx)}>Remove</button>
            </div>
          ))}
        </div>
      <h2>Fighters</h2>  
        <div className='container'>
          {zombieFighters.map((fighter, idx) => (
            <div className='fighterCard' key={idx}>
              <ul>
                <img src={fighter.img}></img>
                <li>{fighter.name}</li> 
                <li>Price: {fighter.price}</li>
                <li>Strength: {fighter.strength}</li>
                <li>Agility: {fighter.agility}</li>
              </ul>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </div>
          ))}
        </div>
    </>    
  );
}

export default App
