import printersImage from '../../assets/images/laboratorio-impressoras-3d.jpg';
import ActionLink from '../ui/ActionLink';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';

export default function Infrastructure() {
  return (
    <section className="infrastructure-section section-pad" id="infraestrutura" aria-labelledby="infrastructure-title">
      <Container className="infrastructure-section__grid">
        <div className="infrastructure-photo">
          <img src={printersImage} alt="Bancada com impressoras 3D no laboratório MakerUSP" loading="lazy" />
          <div className="infrastructure-photo__tag"><Icon name="printer" size={19} /> Laboratório de prototipagem</div>
        </div>
        <div className="infrastructure-section__content">
          <SectionHeading eyebrow="Infraestrutura MakerUSP" title={<span id="infrastructure-title">O espaço certo para <em>tirar do papel.</em></span>} />
          <p className="infrastructure-section__lead">A instrumentação MakerUSP é central na proposta de apoio à criação de soluções. Uma estrutura para experimentar, construir e aperfeiçoar protótipos no ambiente universitário.</p>
          <div className="infrastructure-features">
            <div><Icon name="check" size={18} /><span>Espaço de criação e experimentação</span></div>
            <div><Icon name="check" size={18} /><span>Tecnologias para prototipagem</span></div>
            <div><Icon name="check" size={18} /><span>Conexão com o ecossistema USP</span></div>
          </div>
          <ActionLink href="#contato" variant="secondary">Quero conhecer o MakerUSP</ActionLink>
        </div>
      </Container>
    </section>
  );
}
