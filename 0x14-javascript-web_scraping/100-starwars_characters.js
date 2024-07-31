#!/usr/bin/node

const request = require('request');

// Check if the movie ID is provided
if (process.argv.length < 3) {
  console.error('Usage: node <script-file> <ID>');
  process.exit(1);
}

// Get the ID from command line arguments
const movieId = process.argv[2];
const movieApi = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API endpoint
request.get(movieApi, (error, response, movieBody) => {
  if (error) {
    console.error('Error making request:', error);
    process.exit(1);
  }
