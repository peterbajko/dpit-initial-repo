const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to receive the number from the AI
app.post("/receive-number", async (req, res) => {
  try {
    const { number } = req.body;

    if (typeof number !== "number") {
      return res
        .status(400)
        .json({ error: "Invalid input, expected a number" });
    }

    console.log("Received number: ${number}");

    // Send the number to the other server
    const response = await axios.post("http://other-server-url/endpoint", {
      number,
    });

    console.log("Number forwarded to other server:", response.data);

    // Send a response back to the AI or client
    res
      .status(200)
      .json({ message: "Number received and forwarded successfully" });
  } catch (error) {
    console.error("Error forwarding number:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while forwarding the number" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
