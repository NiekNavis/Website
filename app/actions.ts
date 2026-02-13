'use server';

import nodemailer from 'nodemailer';
import {z} from 'zod';

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  website: z.string().optional()
});

const ipHits = new Map<string, {count: number; ts: number}>();

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(data);
  if (!parsed.success) return {ok: false, error: 'validation'};
  if (parsed.data.website) return {ok: true};

  const ip = 'global';
  const current = ipHits.get(ip);
  const now = Date.now();
  if (current && now - current.ts < 60_000 && current.count > 4) return {ok: false, error: 'rate_limit'};
  ipHits.set(ip, {count: (current?.count ?? 0) + 1, ts: now});

  const {SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO} = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_FROM || !SMTP_TO) {
    console.log('SMTP not configured', parsed.data);
    return {ok: true, fallback: true};
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: SMTP_USER && SMTP_PASS ? {user: SMTP_USER, pass: SMTP_PASS} : undefined
  });

  await transporter.sendMail({
    from: SMTP_FROM,
    to: SMTP_TO,
    subject: `Website contact: ${parsed.data.firstName} ${parsed.data.lastName}`,
    replyTo: parsed.data.email,
    text: `${parsed.data.message}\n\nFrom: ${parsed.data.email}`
  });

  return {ok: true};
}
