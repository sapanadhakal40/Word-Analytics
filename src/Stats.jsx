export default function Stats({ numberOfCharacters }) {
  return (
    <section className="stats">
      <Stat number={0} label="WORDS" />
      <Stat number={numberOfCharacters} label="CHARACTERS" />
      <Stat number={280} label="INSTAGRAM" />
      <Stat number={2200} label="FACEBOOK" />
    </section>
  );
}
function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
