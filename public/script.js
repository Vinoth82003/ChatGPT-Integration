const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", async () => {
  const inputText = userInput.value.trim();
  if (inputText !== "") {
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `<div class="user"></div><div class="msg">${inputText}</div>`;
    chatBox.appendChild(userMessage);

    const personalInfoKeywords = [
      "name",
      "age",
      "gender",
      "location",
      "creator",
    ];

    // Check if any of the keywords are present in the user input
    const isAskingForPersonalInfo = personalInfoKeywords.some((keyword) =>
      inputText.includes(keyword)
    );

    if (isAskingForPersonalInfo) {
      // If any keyword is found, the user is asking about personal information
      let response =
        "I am JARVIS created by IT-B BOYS. My purpose is to assist and provide helpful information about mobile issues resolving.\n" +
        "If you have any questions, feel free to ask!";

      // Display the response with a line break
      displayResponse(response);
      userInput.value = "";
    } else {
      var inputVal = `${inputText}. Only respond if the above is about a mobile issue.`;

      // Display a loading message while waiting for the response
      displayLoadingMessage();

      // Send the modified input to the server and get the response
      const response = await askServer(inputVal);
      userInput.value = "";

      // Display the response with line breaks
      displayResponse(response);
    }
  } else {
    alert("Empty request!");
  }
});

function displayResponse(response) {
  // Remove any existing loading message
  removeLoadingMessage();

  // Split the response into points using regular expression
  const responsePoints = response.split(/\d+\.\s/).filter(Boolean);

  // Create a div for bot message
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");
  const jarvis = document.createElement("div");
  jarvis.classList.add("jarvis");
  botMessage.appendChild(jarvis);

  // Check if the first point starts with "Li" (assumes all points start with "Li" if any does)
  const isPointsResponse = responsePoints[0].trim().startsWith("Li");

  if (isPointsResponse) {
    // If the response starts with "Li," create an unordered list for the points
    const pointsList = document.createElement("ul");

    // Add each point as a list item
    responsePoints.forEach((point) => {
      const listItem = document.createElement("li");
      listItem.innerText = point.trim().substr(2); // Remove "Li" from the point text
      pointsList.appendChild(listItem);
    });

    // Append the points list to the bot message div
    botMessage.appendChild(pointsList);
  } else {
    // If the response doesn't start with "Li," display it as a regular paragraph
    const paragraph = document.createElement("p");
    paragraph.innerText = response;
    botMessage.appendChild(paragraph);
  }

  // Append the bot message div to the chat box
  chatBox.appendChild(botMessage);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

function displayLoadingMessage() {
  const loadingMessage = document.createElement("div");
  loadingMessage.classList.add("loading-message");
  loadingMessage.innerText = "Jarvis is preparing...";
  chatBox.appendChild(loadingMessage);
}

function removeLoadingMessage() {
  const loadingMessage = chatBox.querySelector(".loading-message");
  if (loadingMessage) {
    chatBox.removeChild(loadingMessage);
  }
}

async function askServer(input) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  };

  const response = await fetch("/api/chat", requestOptions);
  const data = await response.json();
  return data.response;
}
