
import Container from '../ui/Container';
import Icon, { type IconName } from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';

type Step = {
  number: string;
  date: string;
  title: string;
  details: string[];
  category?: string;
  deliverable?: string;
  icon: IconName;
};

const steps: Step[] = [
  {
    number: '01',
    date: '16 de outubro',
    title: 'Imersão e Mapeamento de Necessidades',
    details: [
      'Boas-vindas e apresentação do MakerUSP e seus laboratórios.',
      'Roda de conversa para mapeamento das necessidades das startups.',
      'Dinâmica: Canvas de Negócios.',
    ],
    category: 'Mapeamento de necessidades das startups',
    deliverable: 'Canvas de Negócios',
    icon: 'mouse-pointer',
  },
  {
    number: '02',
    date: '23 de outubro',
    title: 'Modelagem e Impressão 3D — Parte 1',
    details: [
      'Princípios básicos da impressão 3D, com exemplos de aplicações desenvolvidas em startups.',
      'Case de Sucesso I.',
      'Mapa de Empatia e Design Thinking.',
    ],
    category: 'Capacitação',
    deliverable: 'Mapa de Empatia',
    icon: 'printer',
  },
  {
    number: '03',
    date: '30 de outubro',
    title: 'Modelagem e Impressão 3D — Parte 2',
    details: [
      'Parte II do curso de Modelagem e Impressão 3D.',
      'Case de Sucesso II.',
      'Criação de Persona.',
    ],
    category: 'Capacitação',
    deliverable: 'Criação de Persona',
    icon: 'layers',
  },
  {
    number: '04',
    date: '06 de novembro',
    title: 'Modelagem e Impressão 3D — Parte 3',
    details: [
      'Parte III do curso de Modelagem e Impressão 3D.',
      'Case de Sucesso III.',
      'Desenvolvimento de Pitch.',
    ],
    category: 'Capacitação',
    deliverable: 'Criação de Pitch',
    icon: 'lightbulb',
  },
  {
    number: '05',
    date: '13 de novembro',
    title: 'Curso de Eletrônica',
    details: [
      'Princípios básicos de eletrônica e programação.',
      'Case de Sucesso III.',
    ],
    category: 'Capacitação',
    icon: 'flask',
  },
  {
    number: '06',
    date: '27 de novembro',
    title: 'Workshop de Realidade Virtual e Aumentada',
    details: [
      'Princípios básicos de Realidade Virtual.',
      'Case de Sucesso: Projeto CELESC.',
    ],
    category: 'Capacitação',
    icon: 'eye',
  },
  {
    number: '07',
    date: '04 de dezembro',
    title: 'Captação de Recursos para Startups',
    details: [
      'Workshop prático sobre captação de recursos por editais FINEP/FAPESP.',
      'Etapas para a captação de recursos.',
      '1 hora de mentoria com pesquisadores.',
    ],
    deliverable: 'Preenchimento de Projeto completo',
    icon: 'send',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="steps-section section-pad"
      id="como-funciona"
      aria-labelledby="steps-title"
    >
      <Container>
        <div className="steps-section__heading">
          <SectionHeading
            eyebrow="Sua jornada"
            title={
              <span id="steps-title">
                O próximo passo começa aqui
                <span className="heading-dot">.</span>
              </span>
            }
            description="Uma jornada de 7 encontros para transformar ideias em soluções. Atividades de capacitação, experimentação e conexão com o ecossistema MakerUSP, das 14h às 17h."
          />
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.number}>
              <div className="step-card__top">
                <span>{step.number}</span>
                <Icon name={step.icon} size={26} />
              </div>

              <span className="step-card__date">
                {step.date}
              </span>

              <h3>{step.title}</h3>

              <ul className="step-card__details">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>

              {(step.category || step.deliverable) && (
                <div className="step-card__footer">
                  {step.category && (
                    <span className="step-card__category">
                      {step.category}
                    </span>
                  )}

                  {step.deliverable && (
                    <div className="step-card__deliverable">
                      <Icon name="check" size={17} />
                      <p>
                        <strong>Entregável:</strong>{' '}
                        {step.deliverable}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {index < steps.length - 1 && (
                <span
                  className="step-card__connector"
                  aria-hidden="true"
                >
                  <Icon name="arrow-right" size={18} />
                </span>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}