import jsonData from '../../../data/data.json';

export async function GET(request) {
  return new Response(JSON.stringify(jsonData));
}