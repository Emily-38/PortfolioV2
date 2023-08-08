import './Presentation.scss';
function Presentation() {
  return (
    <div class="presentation">
      <h1 class="presentation__title">Présentation</h1>
      <p class="presentation__text">
        Passionée de jeux vidéo, je me suis intéressée aux différents langages informatiques. Cela m'a permis de
        découvrir le métier de développeur web,  C'est ainsi que
        j'ai décidé de devenir développeuse web.
        Je me suis formé en autodidacte sur les langages web.
      </p>
      <div>
        <svg
          class="presentation__css"
          height="100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="CSS3"
          viewBox="0 0 512 512"
        >
          <path fill="#264de4" d="M72 460 30 0h451l-41 460-184 52" />
          <path fill="#2965f1" d="M256 37v435l149-41 35-394" />
          <path fill="#ebebeb" d="M114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59l-117-32" />
          <path fill="#fff" d="M256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z" />
        </svg>
        <svg
          class="presentation__html"
          height="100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="HTML5"
          viewBox="0 0 512 512"
        >
          <path fill="#e34f26" d="M71 460 30 0h451l-41 460-185 52" />
          <path fill="#ef652a" d="m256 472 149-41 35-394H256" />
          <path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147-63-17-4-45h-56l7 89 116 32z" />
          <path fill="#fff" d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z" />
        </svg>
        <svg class="presentation__js" width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFCA28" d="M2 2h28v28H2z" />
          <path
            d="m19 25.288 2.061-1.364c.162.507 1.185 1.713 2.477 1.713 1.293 0 1.893-.706 1.893-1.174 0-1.275-1.32-1.725-1.954-1.94a3.689 3.689 0 0 1-.246-.09 3.68 3.68 0 0 0-.133-.053c-.705-.269-3.306-1.262-3.306-4.143 0-3.172 3.062-3.537 3.754-3.537.453 0 2.63.056 3.716 2.094l-2 1.396c-.439-.889-1.167-1.182-1.616-1.182-1.108 0-1.338.812-1.338 1.182 0 1.037 1.203 1.502 2.22 1.894.265.103.518.2.734.303 1.107.523 2.738 1.38 2.738 4.076C28 25.813 26.867 28 24.015 28c-3.83 0-4.846-2.3-5.015-2.712ZM9 25.559l2.149-1.364c.168.508.822 1.443 1.772 1.443.949 0 1.435-.975 1.435-1.443V15h2.642v9.195c.043 1.269-.66 3.805-3.765 3.805C10.38 28 9.193 26.304 9 25.56Z"
            fill="#3E3E3E"
          />
        </svg>
      </div>
    </div>
  );
}

export default Presentation;
