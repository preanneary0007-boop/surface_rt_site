async function sendToAI() {
  const prompt = document.getElementById("prompt").value;

  const response = await fetch("https://surface-rt-site.onrender.com/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  document.getElementById("result").innerHTML = data.content;
}
