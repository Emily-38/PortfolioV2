import './ExperiencesProfessionnelles.scss';
import { experienceslist } from '../../liste/experienceslist.js';
import ButtonExperience from '../../components/ButtonExperience';
import Competence from '../../components/Competence';
import * as React from 'react';

function ExperiencesProfessionnelles() {
  const [experience, setExperience] = React.useState(false);
  const buttontoparent = (experience) => {
    setExperience(experience);
  };
  return (
    <div class="experiences">
      <h1 class="experiences__titre">Experiences Professionnelles</h1>
      <div class="experiences__buttons">
        {experienceslist.map((experience) => {
          return <ButtonExperience experience={experience} buttontoparent={buttontoparent} />;
        })}
      </div>
      {!!experience && <Competence experience={experience} />}
    </div>
  );
}

export default ExperiencesProfessionnelles;
