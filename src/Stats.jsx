export default function Stats({
  numberOfWords,
  numberOfCharacters,
  instagramCharactersLeft,
  facebookCharactersLeft,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="WORDS" />
      <Stat number={numberOfCharacters} label="CHARACTERS" />
      <Stat number={instagramCharactersLeft} label="INSTAGRAM" />
      <Stat number={facebookCharactersLeft} label="FACEBOOK" />
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
