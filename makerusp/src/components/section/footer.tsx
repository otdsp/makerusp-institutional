import BrandLogos from '../ui/BrandLogos';
import Container from '../ui/Container';
import Icon from '../ui/Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__main">
        <div className="site-footer__identity">
          <BrandLogos variant="footer" />
          <p>Conectando pessoas, tecnologia e ideias para construir novos caminhos de inovação.</p>
        </div>
        <div className="site-footer__links">
          <h3>Navegue</h3>
          <a href="#programa">O programa</a>
          <a href="#eixos">4 eixos</a>
          <a href="#infraestrutura">Infraestrutura</a>
          <a href="#contato">Inscrição de interesse</a>
        </div>
        <div className="site-footer__address">
          <h3>Onde estamos</h3>
          <p>Universidade de São Paulo<br />Av. Prof. Lúcio Martins Rodrigues, 370<br />São Paulo, SP</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Av.+Prof.+L%C3%BAcio+Martins+Rodrigues%2C+370%2C+S%C3%A3o+Paulo" target="_blank" rel="noreferrer">Ver no mapa <Icon name="arrow-up-right" size={15} /></a>
        </div>
      </Container>
      <Container className="site-footer__bottom">
        <span>© {new Date().getFullYear()} MakerUSP. Projeto demonstrativo de landing page.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </Container>
    </footer>
  );
}
