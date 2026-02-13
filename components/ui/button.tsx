import {ButtonHTMLAttributes} from 'react';
import {cn} from '@/lib/utils';

export function Button({className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-70',
        className
      )}
      {...props}
    />
  );
}
