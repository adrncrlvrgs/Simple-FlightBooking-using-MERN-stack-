const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI =
  "mongodb+srv://adrianvargas:6DgEYy54adnG36eJ@flightbooked.azs7yab.mongodb.net/BookedFlight?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Define the model for your form data
const FormData = mongoose.model("FormData", {
  trip: String,
  traveler: String,
  frmc: String,
  toc: String,
  formattedSelectedDate: String,
});

// Add a route to handle the form submission
app.post("/api/submit-form", async (req, res) => {
  try {
    const { trip, traveler, frmc, toc, formattedSelectedDate } = req.body;
    // Perform any validation or additional data processing if needed

    // Store the form data in MongoDB
    const formData = new FormData({
      trip,
      traveler,
      frmc,
      toc,
      formattedSelectedDate,
    });
    await formData.save();

    res.status(201).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.log("Error submitting the form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
