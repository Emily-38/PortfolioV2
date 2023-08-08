import './Erreur.scss';
import { Link, NavLink } from 'react-router-dom';
function Erreur() {
  return (
    <div class="erreur">
      <h1 class="erreur__title">Erreur 404</h1>

      <nav class="erreur__nav">
        <NavLink to="/presentation" class={({ isActive }) => isActive && 'active'}>
          Presentation
        </NavLink>
        <NavLink to="/formations" class={({ isActive }) => isActive && 'active'}>
          Formations
        </NavLink>
        <NavLink to="/experiencesProfessionnelles" class={({ isActive }) => isActive && 'active'}>
          Experiences
        </NavLink>
      </nav>
      <Link to="/">
        <svg
          class="erreur__home"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.31 1.776a1 1 0 0 1 1.38 0l8 7.619 2.5 2.38a1 1 0 0 1-1.38 1.45l-.81-.773V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.548l-.81.772a1 1 0 1 1-1.38-1.448l2.5-2.381 8-7.62ZM5 10.548V20h4v-5a3 3 0 1 1 6 0v5h4v-9.452L12 3.88l-7 6.667ZM13 20v-5a1 1 0 1 0-2 0v5h2Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Erreur;
