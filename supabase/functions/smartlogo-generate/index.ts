import { serve } from 'std/server'

serve(async (req) => {
  const { brand } = await req.json();
  // Dummy logo AI process
  return new Response(JSON.stringify({
    status: 'coming_soon',
    message: 'Fitur logo AI segera hadir!',
    brand,
  }), { headers: { 'Content-Type': 'application/json' } });
});
