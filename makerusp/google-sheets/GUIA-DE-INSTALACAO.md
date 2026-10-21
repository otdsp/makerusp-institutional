# MakerUSP — Google Sheets + Apps Script (sem backend próprio)

O formulário React **envia dados por POST tradicional de HTML** para o Google Apps Script. O Google abre uma **nova aba** com a confirmação **somente depois de registrar a inscrição na planilha**. Não é usada uma chamada `fetch` bloqueável por CORS, nem há confirmação falsa antes do armazenamento.

## Arquivos
- `MakerUSP_Inscricoes_Modelo.xlsx`: modelo de planilha com abas `Inscricoes` e `Orientacoes`.
- `Code.gs`: script a colar no editor Google Apps Script.
- Formulário React: `src/components/section/Contact.tsx` (já atualizado).

## 1. Criar a planilha na conta Google

1. Acesse [sheets.new](https://sheets.new) com a conta que será proprietária das inscrições.
2. Vá em **Arquivo > Importar > Fazer upload** e selecione `MakerUSP_Inscricoes_Modelo.xlsx`.
3. Escolha importar para uma nova planilha ou substituir a planilha vazia, conforme a opção exibida.
4. Confirme que a aba se chama **`Inscricoes`** (sem acento) e possui os 9 cabeçalhos.
5. Copie o **ID da planilha** da URL: `https://docs.google.com/spreadsheets/d/ID_DA_PLANILHA/edit`.

> Alternativa: suba o `.xlsx` ao Google Drive, abra-o no Planilhas Google e use **Arquivo > Salvar como Planilhas Google**. O formato final deve ser uma planilha Google, e não somente um XLSX no Drive.

## 2. Criar o Apps Script

1. Com a planilha aberta, clique em **Extensões > Apps Script**.
2. Apague o código de exemplo e cole o conteúdo de `Code.gs`.
3. Substitua `COLE_O_ID_DA_PLANILHA_AQUI` pelo ID do passo 1 (mantenha as aspas).
4. Salve. Dê um nome como `MakerUSP Inscricoes` ao projeto.
5. Clique em **Implantar > Nova implantação**; selecione o tipo **Aplicativo da Web**.
6. Em **Executar como**, escolha **Eu** (a conta dona da planilha); em **Quem tem acesso**, escolha **Qualquer pessoa**, se o formulário for público. Contas institucionais podem restringir essa opção.
7. Clique em **Implantar**, autorize os acessos solicitados pelo Google e copie a URL do aplicativo da Web que termina em **`/exec`**.
8. Se alterar o código depois, **atualize a implantação** para publicar a versão nova. A URL `/dev` é somente para testes internos de editores do script.

> Não compartilhe a planilha com o público. Deixe apenas o *aplicativo da Web* acessível ao formulário; a planilha pode permanecer privada para a equipe autorizada.

## 3. Ligar à landing page React

1. Na raiz do projeto React, crie `.env.local` copiando `.env.example`.
2. Adicione sua URL real de implantação (sem aspas):

```env
VITE_CONTACT_ENDPOINT=https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec
```

3. Execute `npm install` e `npm run dev` (ou reinicie o Vite caso já estivesse aberto).
4. Preencha o formulário e envie **uma inscrição de teste**.
5. Verifique a nova aba: deve aparecer **“Inscrição registrada!”**. Confira que a aba `Inscricoes` recebeu uma linha com os dados de teste.
6. Se aparecer uma mensagem de erro, revise ID, cabeçalhos, permissões e URL `/exec`. Em Apps Script, verifique **Execuções** para detalhes técnicos.
7. Exclua a inscrição de teste antes de colocar em produção.

## Campos salvos

| Coluna | Conteúdo |
| --- | --- |
| Data de envio | Data/hora do registro gerada pelo servidor |
| Nome | Nome do interessado |
| E-mail | E-mail do interessado |
| Startup / ideia | Projeto/startup |
| Descrição | Texto opcional |
| Origem | `Landing page MakerUSP` |
| Consentimento | `Sim` (checkbox obrigatório) |
| Status | `Novo`, para controle interno |
| Observações internas | Em branco, para a equipe preencher |

Os nomes dos campos enviados pelo React são `name`, `email`, `project`, `message`, `consent=yes` e `website` (campo oculto antispam).

## Sobre privacidade, segurança e limites

- **A planilha armazena dados pessoais.** Restrinja os editores e tenha uma política/aviso de privacidade adequado antes de publicar. Determine a retenção dos dados e o procedimento de exclusão conforme a LGPD.
- O link `/exec` é público se publicado para “Qualquer pessoa”, portanto pode sofrer automações/spam. Há um campo-isca simples, validação no script, neutralização de fórmulas e bloqueio de escrita concorrente (`LockService`), mas isso **não substitui CAPTCHA, limitação de requisições ou monitoramento** em uso aberto.
- Google Apps Script/Sheets têm cotas, limites e eventuais restrições impostas pelo Google Workspace; essa solução é voltada a volume inicial/moderado de cadastros.
- Como a confirmação está na nova aba do Google, o formulário React **não mostra sucesso local** sem verificar que a inscrição foi salva. Não use `fetch(..., { mode: 'no-cors' })` para inventar um sucesso; a resposta ficaria opaca.
- Ao publicar uma nova versão do script, atualize a implantação correta.
- Teste em celular e navegadores relevantes após implantação.

### Documentação oficial

- [Apps Script — Aplicativos da Web](https://developers.google.com/apps-script/guides/web?hl=pt-br)
- [Apps Script — Serviço HTML](https://developers.google.com/apps-script/guides/html?hl=pt-br)
