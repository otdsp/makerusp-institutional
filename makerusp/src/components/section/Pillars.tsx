import Container from '../ui/Container';
import Icon, { type IconName } from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';

type Pillar = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
  accent: string;
};

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Imersão e compreensão',
    description: 'Entenda pessoas, identifique desafios e explore problemas reais.',
    icon: 'eye',
    accent: 'red',
  },
  {
    number: '02',
    title: 'Capacitação tecnológica',
    description: 'Desenvolva competências e habilidades para tirar ideias do papel.',
    icon: 'graduation-cap',
    accent: 'purple',
  },
  {
    number: '03',
    title: 'Prototipagem e experimentação',
    description: 'Crie, teste e valide soluções com aprendizado na prática.',
    icon: 'flask',
    accent: 'teal',
  },
  {
    number: '04',
    title: 'Conexão e inspiração',
    description: 'Conecte sua startup às pessoas e ao ecossistema universitário.',
    icon: 'heart',
    accent: 'green',
  },
];

export default function Pillars() {
  return (
    <section className="pillars-section section-pad" id="eixos" aria-labelledby="pillars-title">
      <Container>
        <div className="pillars-section__top">
          <SectionHeading eyebrow="Nossa abordagem" title={<span id="pillars-title">4 eixos para ir mais longe<span className="heading-dot">.</span></span>} />
          <p>Da descoberta de um desafio à conexão com novas possibilidades. Cada etapa conta.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article className={`pillar-card pillar-card--${pillar.accent}`} key={pillar.number}>
              <div className="pillar-card__top">
                <span className="pillar-card__icon"><Icon name={pillar.icon} size={27} /></span>
                <span className="pillar-card__number">{pillar.number} / 04</span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <span className="pillar-card__accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
