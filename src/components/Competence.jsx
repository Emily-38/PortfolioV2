import './css/Competence.scss';

function Competence({ experience }) {
  return (
    <div class="competence">
      <div class="competence__interne">
        <h3 class="competence__title">{experience.intituler}</h3>
        <p>{experience.role}</p>
        <ul>
          <li>{experience.competenceun}</li>
          <li>{experience.competencedeux}</li>
        </ul>
      </div>
    </div>
  );
}

export default Competence;
