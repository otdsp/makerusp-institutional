import { useState, type FormEvent } from 'react';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import MakerSymbol from '../ui/MakerSymbol';

interface InterestForm {
  name: string;
  email: string;
  project: string;
  message: string;
}

type SubmitStatus = 'idle' | 'opened' | 'demo';
const initialData: InterestForm = { name: '', email: '', project: '', message: '' };

export default function Contact() {
  const [fields, setFields] = useState<InterestForm>(initialData);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();

  function updateField(field: keyof InterestForm, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Navegação HTML padrão (target=_blank) contorna restrições de CORS.
    // O Apps Script só exibe confirmação de sucesso APÓS salvar na planilha.
    if (!endpoint) {
      event.preventDefault();
      setStatus('demo');
      return;
    }
    setStatus('opened');
  }

  return (
    <section className="contact-section section-pad" id="contato" aria-labelledby="contact-title">
      <Container className="contact-section__grid">
        <div className="contact-section__intro">
          <p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> Faça parte</p>
          <h2 id="contact-title">Vamos transformar sua <span>ideia em realidade?</span></h2>
          <p>Preencha seus dados e dê o primeiro passo para conhecer o universo MakerUSP.</p>
          <div className="contact-section__deco" aria-hidden="true"><MakerSymbol /></div>
          <div className="contact-section__location"><Icon name="map-pin" size={18} /> Universidade de São Paulo · São Paulo, SP</div>
        </div>
        <div className="contact-card">
          <div className="contact-card__header">
            <div>
              <p>INSCRIÇÃO DE INTERESSE</p>
              <h3>Conte sua ideia pra gente.</h3>
            </div>
            <span><Icon name="send" size={21} /></span>
          </div>
          <form action={endpoint || undefined} method="post" target="_blank" acceptCharset="UTF-8" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="contact-name">Seu nome <span aria-hidden="true">*</span></label>
              <input id="contact-name" name="name" type="text" placeholder="Como podemos te chamar?" autoComplete="name" maxLength={120} value={fields.name} onChange={(event) => updateField('name', event.target.value)} required />
            </div>
            <div className="field">
              <label htmlFor="contact-email">E-mail de contato <span aria-hidden="true">*</span></label>
              <input id="contact-email" name="email" type="email" placeholder="voce@exemplo.com" autoComplete="email" maxLength={180} value={fields.email} onChange={(event) => updateField('email', event.target.value)} required />
            </div>
            <div className="field">
              <label htmlFor="contact-project">Nome da startup / ideia <span aria-hidden="true">*</span></label>
              <input id="contact-project" name="project" type="text" placeholder="Qual é o nome do seu projeto?" maxLength={150} value={fields.project} onChange={(event) => updateField('project', event.target.value)} required />
            </div>
            <div className="field">
              <label htmlFor="contact-message">Conte mais <small>(opcional)</small></label>
              <textarea id="contact-message" name="message" rows={3} placeholder="Qual desafio você quer resolver?" maxLength={1000} value={fields.message} onChange={(event) => updateField('message', event.target.value)} />
            </div>
            <div className="field field--honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Deixe este campo em branco</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <label className="contact-card__consent">
              <input type="checkbox" name="consent" value="yes" required />
              <span>Autorizo o uso dos meus dados para contato sobre meu interesse no MakerUSP.</span>
            </label>
            <button className="contact-card__submit" type="submit">
              Enviar interesse <Icon name="arrow-up-right" size={19} />
            </button>
            <div className="contact-card__feedback" role="status" aria-live="polite">
              {status === 'opened' && <p className="form-notice form-notice--demo">Confira a nova aba: sua inscrição só estará concluída se aparecer <strong>“Inscrição registrada!”</strong>. Caso não abra, confira se o navegador bloqueou a aba.</p>}
              {status === 'demo' && <p className="form-notice form-notice--demo">O envio ainda não está ativo. Configure <code>VITE_CONTACT_ENDPOINT</code> com a URL <code>/exec</code> do Google Apps Script.</p>}
            </div>
            <p className="contact-card__privacy">Os dados serão utilizados para contato sobre o MakerUSP. Não inclua informações sensíveis na descrição do projeto.</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
