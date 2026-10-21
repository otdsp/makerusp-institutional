import image from '../../assets/images/prototipos-makerusp.jpg';
import ActionLink from '../ui/ActionLink';
import Container from '../ui/Container';

export default function PrototypeShowcase() {
  return (
    <section className="showcase-section" aria-labelledby="showcase-title">
      <Container className="showcase-section__grid">
        <div className="showcase-section__content">
          <p className="eyebrow"><span className="eyebrow-line" /> Criar é experimentar</p>
          <h2 id="showcase-title">Ideias na cabeça. <span>Projetos nas mãos.</span></h2>
          <p>Da primeira versão às novas descobertas: prototipar é dar espaço para a inovação acontecer.</p>
          <ActionLink href="#contato" variant="secondary">Quero fazer parte</ActionLink>
        </div>
        <div className="showcase-section__photo">
          <img src={image} alt="Protótipos coloridos produzidos em impressão 3D, ao lado das letras MAKER" loading="lazy" />
          <span className="showcase-section__tag">#MãoNaMassa</span>
        </div>
      </Container>
    </section>
  );
}
