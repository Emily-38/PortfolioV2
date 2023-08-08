import './css/ButtonExperience.scss';
import * as React from 'react';

function ButtonExperience({ experience, buttontoparent }) {
  return (
    <div class="competence">
      <button
        class="competence__button"
        type="button"
        onClick={() => {
          buttontoparent(experience);
        }}
      >
        <h2 class="competence__title">{experience.enseigne}</h2>
        <p>{experience.lieu}</p>
        <p>{experience.date}</p>
      </button>
    </div>
  );
}

export default ButtonExperience;
