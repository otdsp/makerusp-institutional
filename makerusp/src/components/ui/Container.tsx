import type { HTMLAttributes } from 'react';

export default function Container({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`container ${className}`.trim()} {...props} />;
}
