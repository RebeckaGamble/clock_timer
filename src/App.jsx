import "./App.css";
import Stars from "./Stars";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

function App() {
  const cities = [
    { name: "Stockholm", timeZone: "Europe/Stockholm" },
    { name: "London", timeZone: "Europe/London" },
    { name: "New York", timeZone: "America/New_York" },
    { name: "Colorado", timeZone: "America/Denver" },
    { name: "Tokyo", timeZone: "Asia/Tokyo" },
    { name: "Marocco", timeZone: "Africa/Casablanca" },
  ];

  return (
    <>
      <Stars />
      <h2 className="pageTitle">Clock</h2>
      <div className="clockContainer">
        {cities.map((city, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Clock city={city.name} timeZone={city.timeZone} />
          </div>
        ))}
      </div>
      <br />
      <h2 className="pageTitle">Timer</h2>
      <Timer />
    </>
  );
}

export default App;
