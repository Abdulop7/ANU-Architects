// app/api/reviews/route.js (Next.js 13+ App Router)
import fetch from "node-fetch";

export async function GET() {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const PLACE_ID = "ChIJS0xYAeY1OzkRfhMH6HCuC_U";

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return new Response(JSON.stringify(data.result.reviews || []), {
    headers: { "Content-Type": "application/json" },
  });
}
