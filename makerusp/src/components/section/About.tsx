import ActionLink from '../ui/ActionLink';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import MakerSymbol from '../ui/MakerSymbol';

export default function About() {
  return (
    <section className="about-section" id="programa" aria-labelledby="about-title">
      <Container>
        <div className="about-section__panel">
          <div className="about-section__pattern" aria-hidden="true">
            <MakerSymbol />
          </div>
          <div className="about-section__copy">
            <p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> Sobre o programa</p>
            <h2 id="about-title">Um ecossistema para quem <em>faz acontecer.</em></h2>
            <p>O MakerUSP aproxima conhecimento, tecnologias e pessoas para apoiar a construção de soluções. Um ambiente para aprender fazendo, trocar experiências e transformar boas ideias em possibilidades reais.</p>
            <ActionLink variant="light" href="#como-funciona">
              Descubra a jornada
            </ActionLink>
          </div>
          <div className="about-section__aside" aria-label="Nossos princípios">
            <div className="about-section__aside-icon"><Icon name="lightbulb" size={30} /></div>
            <span>EXPERIMENTAR</span>
            <span>COLABORAR</span>
            <span>TRANSFORMAR</span>
            <p>A inovação começa quando a gente coloca a mão na massa.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
