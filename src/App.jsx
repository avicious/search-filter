import { useState } from "react";

const PLANET_DATA = [
  { id: "01", name: "Mercury", size: 2440, unit: "km" },
  { id: "02", name: "Venus", size: 6052, unit: "km" },
  { id: "03", name: "Earth", size: 6371, unit: "km" },
  { id: "04", name: "Mars", size: 3390, unit: "km" },
  { id: "05", name: "Jupiter", size: 69911, unit: "km" },
  { id: "06", name: "Saturn", size: 58232, unit: "km" },
  { id: "07", name: "Uranus", size: 25362, unit: "km" },
  { id: "08", name: "Neptune", size: 24622, unit: "km" },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [minSize, setMinSize] = useState(0);

  const filteredList = PLANET_DATA.filter((planet) => {
    const matchesSearch = planet.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSize = planet.size >= minSize;
    return matchesSearch && matchesSize;
  });

  return (
    <div className="container">
      <h1>Planetary Exploration</h1>

      <div className="list-wrapper">
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div>
            <select
              value={minSize}
              onChange={(e) => setMinSize(Number(e.target.value))}
            >
              <option value="0">All Sizes</option>
              <option value="2000">Greater than 2,000 km</option>
              <option value="6000">Greater than 6,000 km</option>
              <option value="25000">Greater than 25,000 km</option>
            </select>
          </div>
        </div>

        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <div className="card" key={item.id}>
              <p className="num-text">{item.id}</p>
              <div>
                <p className="title">{item.name}</p>
                <p className="description">
                  {item.size} {item.unit}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No planets match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default App;
