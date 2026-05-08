import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [preferences, setPreferences] = useState({
    destination: '',
    duration: '5',
    budget: 'luxury',
    vibe: 'adventure'
  });

  const [itinerary, setItinerary] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    // Mock itinerary generation
    setItinerary([
      { day: 1, title: 'Arrival & Skyline Dinner', desc: 'Arrive at the mountain resort and enjoy a 5-course dinner with panoramic views.' },
      { day: 2, title: 'Alpine Exploration', desc: 'Guided hike through the crystal caves and a private picnic by the glacial lake.' },
      { day: 3, title: 'Cloud-Top Spa', desc: 'Full day of rejuvenation at the world-renowned Sky Spa, featuring local botanical treatments.' }
    ]);
  };

  return (
    <div className="app-container">
      <img src="/hero.png" className="hero-bg" alt="Hero Background" />
      <div className="overlay"></div>

      <header>
        <div className="logo">TARAVELINORMATORY</div>
        <nav className="nav-links">
          <a href="#planner">Planner</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero-content">
          <h1>Experience Travel <br />Beyond Imagination</h1>
          <p>
            The world's first dynamic experience engine. Plan trips dynamically 
            with preferences, constraints, and real-time intelligence.
          </p>
        </section>

        <section id="planner">
          <form className="planner-card" onSubmit={handleGenerate}>
            <div className="input-group">
              <label>Where to?</label>
              <input 
                type="text" 
                placeholder="Ex: Swiss Alps, Tokyo..." 
                value={preferences.destination}
                onChange={(e) => setPreferences({...preferences, destination: e.target.value})}
              />
            </div>
            <div className="input-group">
              <label>Duration (Days)</label>
              <input 
                type="number" 
                min="1" 
                max="30" 
                value={preferences.duration}
                onChange={(e) => setPreferences({...preferences, duration: e.target.value})}
              />
            </div>
            <div className="input-group">
              <label>Budget Level</label>
              <select 
                value={preferences.budget}
                onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
              >
                <option value="economy">Economy</option>
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
                <option value="ultra">Ultra Luxury</option>
              </select>
            </div>
            <div className="input-group">
              <label>Experience Vibe</label>
              <select 
                value={preferences.vibe}
                onChange={(e) => setPreferences({...preferences, vibe: e.target.value})}
              >
                <option value="adventure">Adventure</option>
                <option value="relaxation">Relaxation</option>
                <option value="culture">Culture</option>
                <option value="nightlife">Nightlife</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">Generate Dynamic Itinerary</button>
          </form>
        </section>

        {itinerary && (
          <section className="itinerary-section">
            {itinerary.map((item) => (
              <div key={item.day} className="itinerary-card">
                <h3>Day {item.day}: {item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
