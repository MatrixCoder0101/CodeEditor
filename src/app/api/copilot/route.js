async function completion(prefix, suffix, model, language) {
   const response = await fetch('https://matrixcoder.tech/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        type: "text-generation",
        model: model,
        messages: [
            { role: "system", content: `You are a ${ language ? language + " " : "" }programmer that replaces <FILL_ME> part with the right code. Only output the code that replaces <FILL_ME> part. Do not add any explanation or markdown.` },
            { role: "user", content: `${prefix}<FILL_ME>${suffix}` },
          ]
      })
    });
   const data = await response.json()
   return data?.result?.response;
}

export async function POST(request) {
  const { prefix, suffix, model, language } = await request.json();
  const prediction = await completion(prefix, suffix, model, language);
  return Response.json({ prediction })
}