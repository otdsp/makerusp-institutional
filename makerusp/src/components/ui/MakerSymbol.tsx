import type { SVGProps } from 'react';

export default function MakerSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 315 430"
      width="315"
      height="430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Quadrado roxo superior. */}
      <rect x="251" y="20" width="40" height="40" fill="#5F2F6D" />

      {/* Geometria vermelha: barra superior, duas hastes e coluna lateral. */}
      <path
        d="M95 97H251V292H212V136H173V175H134V136H95V175H56V136H95V97Z"
        fill="#C61833"
      />

      {/* Os dois módulos turquesa centrais, separados por espaço vazio. */}
      <rect x="134" y="175" width="39" height="39" fill="#00827F" />
      <rect x="134" y="253" width="39" height="39" fill="#00827F" />

      {/* Base roxa, alinhada ao fim da haste vermelha. */}
      <rect x="56" y="292" width="195" height="39" fill="#5F2F6D" />

      {/* Dois módulos independentes na parte inferior. */}
      <rect x="17" y="369" width="39" height="40" fill="#009D3B" />
      <rect x="251" y="369" width="40" height="40" fill="#94C020" />
    </svg>
  );
}
