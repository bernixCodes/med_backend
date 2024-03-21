
# Medtrack Pharmacy and Lab Inventory System - Backend

This repository contains the backend implementation of the Pharmacy and Lab Inventory System, built using the MERN (MongoDB, Express.js, ReactJS, Node.js) stack. It serves as the server-side component responsible for handling data storage, retrieval, and management.

## Features

- **RESTful API**: Provides a set of RESTful APIs for performing CRUD operations on pharmacy and lab items.
- **Database Integration**: Seamlessly integrates with MongoDB to store and manage inventory data.
- **Error Handling**: Implements robust error handling mechanisms to ensure smooth operation and graceful degradation.
- **Middleware**: Utilizes middleware functions for request processing and validation.
- **Scalability**: Designed with scalability in mind to accommodate future growth and expansion.

## Technologies Used

- **Node.js**: Server-side runtime environment for executing JavaScript code.
- **Express.js**: Web application framework for building APIs and handling HTTP requests.
- **MongoDB**: NoSQL database for storing inventory data.
- **Mongoose**: MongoDB object modeling tool for Node.js.


## Getting Started

To set up the backend locally and start developing or testing, follow these steps:

### Prerequisites

- Node.js installed on your local machine.
- MongoDB installed and running locally or access to a MongoDB instance.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/bernixCodes/med_backend.git
   ```
2. Navigate to the project directory
   ```sh
   cd med_backend
   ```
3. Install npm packages
   ```sh
   npm install
   ```
4. Set up environment variables
   - Create a `.env` file in the root directory
   - Define environment variables: `PORT` and  `MONGODB_URI`

5. Start the server
   ```sh
   npm start
   ```
