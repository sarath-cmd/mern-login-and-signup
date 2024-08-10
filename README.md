<h1>MERN Login and Signup System</h1>
<p>The MERN Login and Signup System is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It provides user authentication features, allowing users to register, log in, and explore a basic frontend interface.
</p>

<h2>Features</h2>
<h3>1.User Registration and Authentication:</h3>
<ul>
  <li>Users can register with a unique email address and a secure password.</li>
  <li>Passwords are hashed using bcrypt for enhanced security.</li>
</ul>
<h3>2.Frontend Interface:</h3>
<ul>
  <li>The frontend is built with React, providing a simple user interface.</li>
  <li>Users can register, log in, and view basic information</li>
</ul>
<h3>3.Backend API:</h3>
<ul>
  <li>The backend server is implemented using Express.js.</li>
  <li>MongoDB is used as the database to store user data.</li>
  <li>Routes handle user registration, login, and profile retrieval.</li>
</ul>

<h2>Installation</h2>
<h6>Follow these steps to set up the project locally:</h6>
<h4>1.Clone the Repository:</h4>
<p>git clone https://github.com/sarath-cmd/mern-login-and-signup.git</p>

<h4>2.Install Dependencies:</h4>
<ul>
  <li>Navigate to the client folder and run:</li>
  <p>
    <span>cd mern-login-and-signup/client</span><br>
    <span>npm install</span>
  </p>
  <br>
  <li>Navigate to the backend folder and run:</li>
  <p>
    <span>cd ../backend</span><br>
    <span>npm install</span>
  </p>
</ul>

<h4>3.Configure MongoDB Connection:</h4>
<ul>
  <li>Set up a MongoDB database (either locally or using a cloud service).</li>
  <li>Update the MongoDB connection string in backend/config/db.js.</li>
</ul>

<h4>4.Start the Servers:</h4>
<ul>
  <li>Run the backend server:</li>
  <p>npm start</p>
  <li>Run the frontend development server:</li>
  <p>
    <span>cd ../client</span>
    <span>npm start</span>
  </p>
</ul>

<h2>Usage</h2>
<h3>1.Register a New User:</h3>
<ol>
  <li>Open the application in your browser.</li>
  <li>Click on the “Register” link.</li>
  <li>Provide a valid email address and a strong password.</li>
  <li>Submit the registration form.</li>
  <li>After this you no need to verify OTP</li>
  <li>It is still in development phase</li>
  <li>So you can come back to home page and can login</li>
</ol>

<h3>2.Log In:</h3>
<ol>
  <li>After registration, click on the “Log In” link</li>
  <li>Enter your registered email and password.</li>
</ol>

<h3>3.Explore the Frontend:</h3>
<ol>
  <li>Navigate through the basic frontend interface</li>
  <li>Customize and enhance the frontend components as needed for your project</li>
</ol>

<h2>Contributing</h2>
<p>Contributions are welcomed!</p>
