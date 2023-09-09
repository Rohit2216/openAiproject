async function convertCode() {
  const code = document.getElementById("input-code").value;
  const language = document.getElementById("languages").value;

  // const api="https://codeconverter-0wxy.onrender.com"

  const response = await fetch(`https://codeconverter-0wxy.onrender.com/convert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, language }),
  });

  const data = await response.json();
  document.getElementById("output-panel").innerText = data.response;
}

async function debugCode() {
  const code = document.getElementById("input-code").value;

  const response = await fetch(`https://codeconverter-0wxy.onrender.com/debug`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await response.json();
  document.getElementById("output-panel").innerText = data.response;
}

async function qualityCheck() {
  const code = document.getElementById("input-code").value;

  const response = await fetch(`https://codeconverter-0wxy.onrender.com/quality`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await response.json();
  document.getElementById("output-panel").innerText = data.response;
}