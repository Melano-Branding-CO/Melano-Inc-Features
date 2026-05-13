import './styles.css';

const app = document.querySelector('#app');

const features = [
  {
    title: 'Brand systems',
    description:
      'Visual identities, messaging foundations, and launch-ready brand assets for growing companies.',
  },
  {
    title: 'Digital experiences',
    description:
      'Landing pages and interactive product moments that keep the Melano Inc. story clear and memorable.',
  },
  {
    title: 'Growth workflows',
    description:
      'Practical campaign and analytics workflows designed for small teams that need momentum fast.',
  },
];

app.innerHTML = `
  <div class="page">
    <main class="shell">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="/" aria-label="Melano Inc. home">
          <span class="brand-mark" aria-hidden="true">M</span>
          <span>Melano Inc.</span>
        </a>
        <a class="nav-link" href="mailto:hello@melanoinc.example">Start a project</a>
      </nav>

      <section class="hero" aria-labelledby="hero-title">
        <p class="eyebrow">Cloud-ready starter</p>
        <h1 id="hero-title">Build sharper brand experiences with Melano Inc.</h1>
        <p class="hero-copy">
          A clean, deployable web starter for showcasing Melano Inc. features, services,
          and client-facing product ideas.
        </p>
        <div class="actions">
          <a class="button primary" href="#features">Explore features</a>
          <a class="button secondary" href="mailto:hello@melanoinc.example">Contact us</a>
        </div>
      </section>

      <section class="feature-grid" id="features" aria-label="Melano Inc. feature areas">
        ${features
          .map(
            (feature) => `
              <article class="feature">
                <h2>${feature.title}</h2>
                <p>${feature.description}</p>
              </article>
            `,
          )
          .join('')}
      </section>
    </main>
  </div>
`;
