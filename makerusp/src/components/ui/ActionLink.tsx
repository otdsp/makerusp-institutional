import type { AnchorHTMLAttributes, ReactNode } from 'react';
import Icon from './Icon';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'light';
  withArrow?: boolean;
};

export default function ActionLink({
  children,
  variant = 'primary',
  className = '',
  withArrow = true,
  ...props
}: Props) {
  return (
    <a className={`action-link action-link--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      {withArrow && <Icon name="arrow-up-right" size={18} />}
    </a>
  );
}
