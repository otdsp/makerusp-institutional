import Container from '../ui/Container';
import Icon from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  { number: '01', title: 'Compartilhe sua ideia', text: 'Conte um pouco sobre você e o desafio que quer resolver.' },
  { number: '02', title: 'Conecte-se ao ecossistema', text: 'Conheça oportunidades de aprendizado, troca e colaboração.' },
  { number: '03', title: 'Experimente e evolua', text: 'Explore possibilidades para testar e desenvolver sua solução.' },
];

export default function HowItWorks() {
  return (
    <section className="steps-section section-pad" id="como-funciona" aria-labelledby="steps-title">
      <Container>
        <div className="steps-section__heading">
          <SectionHeading eyebrow="Sua jornada" title={<span id="steps-title">O próximo passo começa aqui<span className="heading-dot">.</span></span>} description="Uma jornada colaborativa para transformar curiosidade em ação." />
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.number}>
              <div className="step-card__top">
                <span>{step.number}</span>
                <Icon name={index === 0 ? 'mouse-pointer' : index === 1 ? 'users' : 'layers'} size={26} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < steps.length - 1 && <span className="step-card__connector" aria-hidden="true"><Icon name="arrow-right" size={18} /></span>}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
