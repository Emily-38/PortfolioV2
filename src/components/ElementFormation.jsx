import { formationslist } from '../liste/formationslist';
import Formation from './Formation';
import '../components/css/ElementFormation.scss';

function Bulle() {
  return (
    <div class="timeline">
      {formationslist.map((formation, i) => (
        <div class="formation-wrapper">
          <div class={'formation formation--' + (i % 2 === 0 ? 'top' : 'bottom')}>
            <Formation name={formation.name} ecole={formation.ecole} annee={formation.annee} />
            <svg
              class={'formation__contenu__cercle formation__cercle--' + (i % 2 === 0 ? 'top' : 'bottom')}
              width="40"
              height="40"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <circle cx="16" cy="16" r="16" />
            </svg>
          </div>
        </div>
      ))}
      <svg class="arrow" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 24 24">
        <path fill="currentColor" d="m9 18 7-6-7-6v12z" />
        <path fill="none" class="st0" d="M0 0h24v24H0z" />
        <path fill="none" class="st0" d="M0 0h24v24H0z" />
      </svg>
    </div>
  );
}
export default Bulle;
