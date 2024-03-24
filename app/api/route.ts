// pages/api/animes.js
import { NextResponse } from 'next/server';
import pool from '../../dbConfig';

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT id, name, genre, rating FROM animes');
    const animes = result.rows;
    client.release();
    return NextResponse.json(animes);
  } catch (err) {
    console.error('Erro ao obter dados do banco de dados', err);

  }
}
