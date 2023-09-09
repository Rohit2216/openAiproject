async function generateContent() {
    const prompt = document.getElementById("prompt").value || 'Love';
    const contentType = document.getElementById("content-type").value;
    let endpoint = "https://aicontent-5wwd.onrender.com"; // Change this to your server URL
  
    switch (contentType) {
      case "shayari":
        endpoint += "/generate-shayari";
        break;
      case "quote":
        endpoint += "/quote";
        break;
      case "joke":
        endpoint += "/joke";
        break;
      case "story":
        endpoint += "/story";
        break;
      default:
        return;
    }
  
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });
  
    const data = await response.json();
    displayResult(data[contentType]);
  }
  
  function displayResult(content) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = content;
  }
  