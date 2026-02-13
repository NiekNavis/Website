'use client';

import {useState, useTransition} from 'react';
import {useTranslations} from 'next-intl';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {submitContactForm} from '@/app/actions';
import {siteConfig} from '@/content/site';
import {Button} from './ui/button';

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  website: z.string().optional()
});

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const t = useTranslations('contactForm');
  const [state, setState] = useState<'idle' | 'success' | 'error' | 'fallback'>('idle');
  const [pending, startTransition] = useTransition();
  const {register, handleSubmit, formState: {errors}, reset} = useForm<Values>({resolver: zodResolver(schema)});

  return (
    <form className="space-y-4 rounded-2xl border bg-white p-6" onSubmit={handleSubmit((values) => {
      startTransition(async () => {
        const fd = new FormData();
        Object.entries(values).forEach(([k,v]) => fd.append(k, v || ''));
        const result = await submitContactForm(fd);
        if (result.ok) {
          setState(result.fallback ? 'fallback' : 'success');
          reset();
        } else setState('error');
      });
    })}>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} />
      {(['firstName','lastName','email'] as const).map((field) => (
        <label key={field} className="block text-sm">
          {t(field)}
          <input className="mt-1 w-full rounded-lg border p-2" {...register(field)} />
          {errors[field] && <span className="text-xs text-red-600">{errors[field]?.message}</span>}
        </label>
      ))}
      <label className="block text-sm">{t('message')}<textarea className="mt-1 w-full rounded-lg border p-2" rows={5} {...register('message')} /></label>
      <Button type="submit" disabled={pending}>{t('submit')}</Button>
      {state === 'success' && <p className="text-sm text-green-700">{t('success')}</p>}
      {state === 'fallback' && <p className="text-sm text-amber-700">{t('fallback')} <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>}
      {state === 'error' && <p className="text-sm text-red-700">{t('error')}</p>}
    </form>
  );
}
