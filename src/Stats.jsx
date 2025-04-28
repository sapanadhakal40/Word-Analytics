export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="WORDS" />
      <Stat number={stats.numberOfCharacters} label="CHARACTERS" />
      <Stat number={stats.instagramCharactersLeft} label="INSTAGRAM" />
      <Stat number={stats.facebookCharactersLeft} label="FACEBOOK" />
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
