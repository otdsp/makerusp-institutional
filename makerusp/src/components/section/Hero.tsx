import facadeImage from '../../assets/images/entrada-makerusp.jpg';
import ActionLink from '../ui/ActionLink';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import MakerSymbol from '../ui/MakerSymbol';

export default function Hero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <Container className="hero-section__grid">
        <div className="hero-section__content">
          <p className="hero-kicker"><span className="status-dot" /> INOVA.USP + MAKERUSP</p>
          <h1 id="hero-title">Ideias que <span>ganham forma.</span> Inovação que transforma.</h1>
          <p className="hero-section__description">
            Um ecossistema para o desenvolvimento e a inovação de startups,
            conectando <strong>capacitação, prototipagem</strong> e a força da universidade.
          </p>
          <div className="hero-section__actions">
            <ActionLink href="#contato">Inscreva sua startup</ActionLink>
            <ActionLink href="#programa" variant="text">Conheça o programa</ActionLink>
          </div>
          <div className="hero-section__footnote">
            <span className="hero-section__footnote-icon"><Icon name="sparkles" size={19} /></span>
            <span>Conexões, aprendizado e espaço para experimentar.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__image-wrap">
            <img
              className="hero-visual__photo"
              src={facadeImage}
              alt="Entrada do makerspace MakerUSP, com fachada de vidro e letreiro MAKER"
              loading="eager"
            />
            <div className="hero-visual__caption">
              <span className="hero-visual__caption-mark" aria-hidden="true"><MakerSymbol /></span>
              <span><strong>MakerUSP</strong><small>Um lugar para criar, testar e evoluir.</small></span>
              <Icon name="arrow-up-right" size={21} />
            </div>
          </div>
          <div className="hero-visual__pixels" aria-hidden="true">
            <MakerSymbol />
          </div>
          <div className="hero-visual__floating-label"><Icon name="map-pin" size={14} /> Universidade de São Paulo</div>
        </div>
      </Container>
    </section>
  );
}
