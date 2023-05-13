const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

mongoose.set('strictQuery', false);

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/nit_hostel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

connection.on('error', (error) => {
  console.error(error);
});
// Check if the connection is established successfully
if (connection.readyState === 1) {
  console.log('Connection to MongoDB is established');
} else {
  console.log('Connection to MongoDB is not established');
}

// Create a Mongoose model for the data
const formDataSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  department: { type: String, enum: ['btech', 'mtech', 'mba', 'mca', 'phd'], required: true },
  branch: { type: String, enum: ['A', 'B', 'C', 'D', 'E'], required: true },
  year: { type: String, enum: ['First', 'Second', 'Third', 'Fourth'], required: true },
  bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  parentsMobileNumber: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
});

const FormData = mongoose.model('FormData', formDataSchema, 'students');

app.use(cors());
app.use(bodyParser.json());

// POST request handler for the API endpoint
app.post('/api/students', (req, res) => {
  // Create a new FormData object with the request body data
  const formData = new FormData(req.body);
  // Check that the password and confirm password fields match
  if (formData.password !== formData.confirmPassword) {
    res.send('Error: Passwords do not match');
    return;
  }
  // Save the form data to the database
  formData.save()
    .then(() => {
      res.send('Successfully saved form data to the database');
    })
    .catch((error) => {
      console.error(error);
      res.send('Error saving form data to the database');
    });
});

app.get('/api/students', (req, res) => {
  FormData.find((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving form data from the database');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
