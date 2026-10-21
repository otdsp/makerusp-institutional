import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'menu'
  | 'close'
  | 'eye'
  | 'graduation-cap'
  | 'flask'
  | 'heart'
  | 'check'
  | 'map-pin'
  | 'sparkles'
  | 'printer'
  | 'users'
  | 'lightbulb'
  | 'send'
  | 'layers'
  | 'mouse-pointer';

type Props = Omit<SVGProps<SVGSVGElement>, 'name'> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 24, ...props }: Props) {
  let drawing: ReactNode;

  switch (name) {
    case 'arrow-right':
      drawing = <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>;
      break;
    case 'arrow-up-right':
      drawing = <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>;
      break;
    case 'menu':
      drawing = <><path d="M4 7h16M4 12h16M4 17h16" /></>;
      break;
    case 'close':
      drawing = <><path d="M5 5 19 19M19 5 5 19" /></>;
      break;
    case 'eye':
      drawing = <><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" /><circle cx="12" cy="12" r="2.7" /></>;
      break;
    case 'graduation-cap':
      drawing = <><path d="m2 9 10-5 10 5-10 5-10-5Z" /><path d="M6 11v5c0 1.8 3 3.5 6 3.5s6-1.7 6-3.5v-5M22 9v7" /></>;
      break;
    case 'flask':
      drawing = <><path d="M9 3h6M10 3v6l-6 9a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-6-9V3" /><path d="M7 16h10M10 13h.01M14 18h.01" /></>;
      break;
    case 'heart':
      drawing = <path d="M20.7 5.5a5.5 5.5 0 0 0-7.8 0L12 6.4l-.9-.9a5.5 5.5 0 1 0-7.8 7.8L12 22l8.7-8.7a5.5 5.5 0 0 0 0-7.8Z" />;
      break;
    case 'check':
      drawing = <path d="m5 12 4.5 4.5L19 7" />;
      break;
    case 'map-pin':
      drawing = <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>;
      break;
    case 'sparkles':
      drawing = <><path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2ZM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17ZM4 2l.8 2.2L7 5l-2.2.8L4 8l-.8-2.2L1 5l2.2-.8L4 2Z" /></>;
      break;
    case 'printer':
      drawing = <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 9h16M4 15h16M8 3v6M16 3v6M8 15l4-3 4 3" /></>;
      break;
    case 'users':
      drawing = <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2H3ZM17 5a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" /></>;
      break;
    case 'lightbulb':
      drawing = <><path d="M9 18h6M10 22h4M8.5 15.5a7 7 0 1 1 7 0l-.5 2.5h-6l-.5-2.5Z" /></>;
      break;
    case 'send':
      drawing = <><path d="m22 2-7 20-4-9-9-4L22 2Z" /><path d="M22 2 11 13" /></>;
      break;
    case 'layers':
      drawing = <><path d="m12 2 10 6-10 6L2 8l10-6ZM2 12l10 6 10-6M2 16l10 6 10-6" /></>;
      break;
    case 'mouse-pointer':
      drawing = <><path d="m5 3 14 9-7 1-3 7-4-17Z" /><path d="m12 13 4 7" /></>;
      break;
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {drawing}
    </svg>
  );
}
