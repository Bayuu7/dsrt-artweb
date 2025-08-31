import { serve } from 'std/server'

serve(async (req) => {
  const { image } = await req.json();
  // Dummy photo AI process
  return new Response(JSON.stringify({
    status: 'success',
    message: 'Foto diedit AI!',
    url: image,
  }), { headers: { 'Content-Type': 'application/json' } });
});
