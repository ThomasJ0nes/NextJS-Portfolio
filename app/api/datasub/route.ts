import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, subject, message } = await request.json();

  try {
    if (!email || !subject || !message) {
      throw new Error('Email, subject, and message are required');
    }

    await sql`
      INSERT INTO contact (email, subject, message)
      VALUES (${email}, ${subject}, ${message});
    `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  try {
    const contacts = await sql`SELECT * FROM contact;`;
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
