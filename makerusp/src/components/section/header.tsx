import { useState } from 'react';
import ActionLink from '../ui/ActionLink';
import BrandLogos from '../ui/BrandLogos';
import Container from '../ui/Container';
import Icon from '../ui/Icon';

const navigation = [
  { label: 'O programa', href: '#programa' },
  { label: 'Eixos', href: '#eixos' },
  { label: 'Infraestrutura', href: '#infraestrutura' },
  { label: 'Como funciona', href: '#como-funciona' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="site-header__brand-link" href="#inicio" aria-label="MakerUSP — voltar ao início" onClick={() => setMenuOpen(false)}>
          <BrandLogos />
        </a>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} id="primary-navigation" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <ActionLink href="#contato" className="site-nav__mobile-cta" onClick={() => setMenuOpen(false)}>
            Inscreva sua startup
          </ActionLink>
        </nav>

        <ActionLink href="#contato" className="site-header__cta" withArrow={false}>
          Inscreva sua startup <Icon name="arrow-up-right" size={16} />
        </ActionLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </Container>
    </header>
  );
}
