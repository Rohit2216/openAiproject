const chatHistory = document.querySelector(".chat-history");
    const userInput = document.getElementById("user-input");

    // Function to add a new message to the chat history
    function addMessage(message, isUser = false) {
      const newMessage = document.createElement("div");
      newMessage.classList.add("chat-box");
      newMessage.classList.add(isUser ? "user-message" : "bot-message");
      newMessage.innerHTML = `<p>${message}</p>`;
      chatHistory.appendChild(newMessage);
      // Scroll to the bottom to show the most recent message
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Function to send user input to the server
    async function sendMessageToServer(message) {
      try {
        const response = await fetch("https://aicontent-5wwd.onrender.com/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: message }),
        });

        const data = await response.json();
        return data.answer;
      } catch (error) {
        console.error("Error sending message to server:", error);
        return "Sorry, something went wrong!";
      }
    }

    // Function to handle user input
    async function handleUserInput() {
      const message = userInput.value.trim();
      if (message) {
        addMessage(message, true);
        userInput.value = "";

        const botReply = await sendMessageToServer(message);
        addMessage(botReply);
      }
    }

    userInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        handleUserInput();
      }
    });