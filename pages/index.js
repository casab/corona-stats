import useStats from "../utils/useStats";

function Stats() {
  const stats = useStats();
  if (!stats) return <p>Loading...</p>;
  return (
    <div>
      <div className="statBlock">
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="statBlock">
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </div>
      <div className="statBlock">
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <div>
      <Stats></Stats>
    </div>
  );
}
