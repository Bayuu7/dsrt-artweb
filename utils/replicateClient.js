export async function replicateInference(model, input) {
  const response = await fetch(`https://api.replicate.com/v1/predictions`, {
    method: "POST",
    headers: {
      "Authorization": `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: model,
      input
    })
  });
  return response.json();
}
