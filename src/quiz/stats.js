/*
The stats compnent renders the score 
adn current question number.
*/
import "./stats.css";
function Stat({label, value}) {
  return (
    <ul className="stats__stat-container">
      <li>
        <div className="stats__stat-label">{label}</div>
        <div className="stats__stat-value">{value}</div>
      </li>
    </ul>
  );
}

function Stats({ score, QuestionNumber, totalQuestions, difficulty }) {
  return (
    <ul className="stats">
      <Stat label="Score" value={score}/>
      <Stat label="Question" value={`${QuestionNumber} / ${totalQuestions}`}/>
      <Stat label="Difficulty:" value={difficulty}/>
    </ul>
  );
}

export default Stats;
