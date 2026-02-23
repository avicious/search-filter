import { useState } from "react";

const PLANET_DATA = [
  { id: "01", name: "Mercury", size: "2440", unit: "km" },
  { id: "02", name: "Venus", size: "6052", unit: "km" },
  { id: "03", name: "Earth", size: "6371", unit: "km" },
  { id: "04", name: "Mars", size: "3390", unit: "km" },
  { id: "05", name: "Jupiter", size: "69911", unit: "km" },
  { id: "06", name: "Saturn", size: "58232", unit: "km" },
  { id: "07", name: "Uranus", size: "25362", unit: "km" },
  { id: "08", name: "Neptune", size: "24622", unit: "km" },
];

const App = () => {
  const [filteredList, setFilteredList] = useState(PLANET_DATA);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;

    if (!query) {
      setFilteredList(PLANET_DATA);
      setSearchQuery(query);
      return;
    }

    setSearchQuery(query);

    const searchList = filteredList.filter(
      (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );

    setFilteredList(searchList);
  };

  const onFilterChange = (e) => {
    const selectedSize = Number(e.target.value);

    if (!selectedSize) {
      setFilteredList(PLANET_DATA);
    }

    const filterList = PLANET_DATA.filter(
      (item) => Number(item.size) > selectedSize,
    );

    setFilteredList(filterList);
  };

  return (
    <div className="container">
      <h1>Search Filter Array of Objects</h1>

      <div className="list-wrapper">
        <div className="filter-container">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div>
            <select name="size" onChange={onFilterChange}>
              <option value="">Filter by Size</option>
              <option value="2000">Greater than 2000 km</option>
              <option value="6000">Greater than 6000 km</option>
              <option value="10000">Greater than 10000 km</option>
              <option value="25000">Greater than 25000 km</option>
            </select>
          </div>
        </div>

        {filteredList.map((item) => {
          return (
            <div className="card" key={item.id}>
              <p className="num-text">{item.id}</p>
              <div>
                <p className="title">{item.name}</p>
                <p className="description">
                  {item.size} {item.unit}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
