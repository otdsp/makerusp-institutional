/**
 * MakerUSP — inscrição de interesse via Google Apps Script + Google Sheets.
 *
 * 1. Crie/importe a planilha-modelo como Google Sheets.
 * 2. Cole o ID da planilha (trecho entre /d/ e /edit da URL) abaixo.
 * 3. Cole este arquivo em Extensões > Apps Script da planilha.
 * 4. Implantar > Nova implantação > Aplicativo da Web:
 *    Executar como: Eu / Quem tem acesso: Qualquer pessoa.
 * 5. Copie a URL terminada em /exec para VITE_CONTACT_ENDPOINT no React.
 *
 * Sem fetch: o formulário usa POST HTML tradicional e abre a resposta
 * do Google em nova aba. O usuário só vê sucesso APÓS appendRow + flush.
 */
const SPREADSHEET_ID = 'COLE_O_ID_DA_PLANILHA_AQUI';
const SHEET_NAME = 'Inscricoes';

const HEADERS = [
  'Data de envio',
  'Nome',
  'E-mail',
  'Startup / ideia',
  'Descrição',
  'Origem',
  'Consentimento',
  'Status',
  'Observações internas'
];

/** Verificação ao abrir a URL /exec no navegador; não registra nada. */
function doGet() {
  return resultPage_('info', 'Integração MakerUSP',
    'Aplicativo disponível. Para registrar uma inscrição, envie o formulário pela landing page.');
}

/** Recebe envio do formulário HTML (application/x-www-form-urlencoded). */
function doPost(e) {
  const p = e && e.parameter ? e.parameter : {};

  // Campo invisível antispam. Não grava dados quando preenchido.
  if (String(p.website || '').trim()) {
    return resultPage_('info', 'Solicitação recebida', 'Não foi possível validar esta solicitação.');
  }

  const name = clean_(p.name);
  const email = clean_(p.email);
  const project = clean_(p.project);
  const message = clean_(p.message);

  if (!valid_(name, 120) || !valid_(email, 180) || !valid_(project, 150) ||
      message.length > 1000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || p.consent !== 'yes') {
    return resultPage_('error', 'Confira os dados',
      'Preencha nome, e-mail válido, projeto e autorização de contato. Depois, tente novamente.');
  }

  // Nunca assumir sucesso antes do Google confirmar a gravação.
  const lock = LockService.getScriptLock();
  let locked = false;
  try {
    if (SPREADSHEET_ID === 'COLE_O_ID_DA_PLANILHA_AQUI') {
      throw new Error('Configure SPREADSHEET_ID no Code.gs.');
    }

    lock.waitLock(15000);
    locked = true;

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('A aba ' + SHEET_NAME + ' não foi encontrada.');

    const headers = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
    if (!HEADERS.every(function (header, index) { return headers[index] === header; })) {
      throw new Error('Os cabeçalhos da aba Inscricoes diferem dos definidos no modelo.');
    }

    sheet.appendRow([
      new Date(),
      safeCell_(name),
      safeCell_(email),
      safeCell_(project),
      safeCell_(message),
      'Landing page MakerUSP',
      'Sim',
      'Novo',
      ''
    ]);
    SpreadsheetApp.flush();

    return resultPage_('success', 'Inscrição registrada!',
      'Recebemos seus dados na planilha de interesse MakerUSP. Você já pode fechar esta aba.');
  } catch (error) {
    console.error('Falha ao salvar inscrição:', error);
    return resultPage_('error', 'Não foi possível registrar',
      'A inscrição não foi confirmada. Volte à página anterior e tente novamente mais tarde.');
  } finally {
    if (locked) lock.releaseLock();
  }
}

function clean_(value) {
  return String(value == null ? '' : value).trim();
}

function valid_(value, maxLength) {
  return value.length > 0 && value.length <= maxLength;
}

/** Evita que valores fornecidos por usuários sejam interpretados como fórmulas. */
function safeCell_(value) {
  const text = value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

/** Resposta visual servida pelo Google em uma nova aba, sem depender de CORS. */
function resultPage_(status, title, description) {
  const palette = status === 'success'
    ? { accent: '#16754c', pale: '#e9f7ef' }
    : status === 'error'
      ? { accent: '#be1437', pale: '#fff0f3' }
      : { accent: '#13213b', pale: '#eff3f7' };

  const html = '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">' +
    '<style>*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;' +
    'place-items:center;background:#f5f6f8;font-family:Arial,sans-serif;color:#202330;' +
    'padding:24px}.card{background:#fff;border-radius:20px;padding:42px 36px;' +
    'max-width:520px;width:100%;box-shadow:0 12px 45px #101b3414;text-align:center}' +
    '.tag{display:inline-block;border-radius:50px;background:' + palette.pale +
    ';color:' + palette.accent + ';padding:9px 14px;font-size:12px;font-weight:700}' +
    'h1{font-size:28px;margin:22px 0 12px;line-height:1.15}p{line-height:1.65;' +
    'color:#61636e;margin:0}.brand{margin-top:26px;color:#be1437;font-weight:700;' +
    'letter-spacing:.05em;font-size:12px}</style></head><body><main class="card">' +
    '<span class="tag">MakerUSP · Inscrições</span><h1>' + title + '</h1><p>' +
    description + '</p><div class="brand">INOVA.USP · MAKER</div></main></body></html>';
  return HtmlService.createHtmlOutput(html)
    .setTitle('MakerUSP | Inscrição de interesse')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
