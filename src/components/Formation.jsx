import '../components/css/Formation.scss';
function Formation({ name, annee, ecole }) {
  return (
    <ul class="formation__contenu">
      <li>
        <h2 class="formation__contenu__title">{name}</h2>
      </li>
      <li>
        <p class="formation__contenu__text">
          {annee} {ecole}
        </p>
      </li>
    </ul>
  );
}
export default Formation;
