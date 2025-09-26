//! Æternum Author
//? @/lib/strings.ts
'use client';
import { useLang } from '@/contexts/LangContext';
const _ = require('lodash');

export default function TXT(entry: string) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  INTRO1: [
    'Tudo que é belo fica na cabeça das pessoas, e isso também vale para aplicações. Em meio à enchente diária de informações, é preciso ser criativo para não ser esquecido naquela aba que ficou para trás, ou no aplicativo que não foi parar na primeira tela.',
    "Beautiful things stay in people's heads, and this also applies to applications. Amid the daily flood of information, you need to be creative not to be forgotten in that tab that was left behind, or in the app that didn't make it to the first screen.",
  ],
  INTRO2: [
    'Após muito conduzir usuários através de frontends simples e interessantes, percebi que comecei a passear entre meus projetos para copiar o que havia feito anteriormente. Uma biblioteca era necessária. Isso se tornou a SUPERLIB.',
    'After a lot of walking users through simple and interesting frontends, I realized that I started wandering between my projects to copy what I had done previously. A library was needed. This became SUPERLIB.',
  ],
  INTRO3: [
    'Confira a minha lista de componentes abaixo!',
    'Check out my list of components below!',
  ],
  LISTA_DE_EXEMPLOS: ['menu de exemplos', 'examples menu'],
  FRONTEND_IS_ART: ['frontend é arte.', 'frontend is art.'],
};
