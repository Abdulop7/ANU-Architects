import { NextResponse } from "next/server";

export async function GET() {
  const placeId = "ChIJS0xYAeY1OzkRfhMH6HCuC_U"; // Replace with your real Place ID
//   const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}`
  );

  const data = await res.json();
  return NextResponse.json(data.result.reviews || []);
}
