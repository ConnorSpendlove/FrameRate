// services/opencritic.js
const axios = require('axios');

const API_URL = 'https://api.opencritic.com/api/game/';

async function getGameById(gameId) {
  try {
    const response = await axios.get(`${API_URL}/${gameId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw new Error('Error fetching game data');
  }
}

async function searchGames(query) {
  try {
    const response = await axios.get(`${API_URL}/search?criteria=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw new Error('Failed to search for games');
  }
}
module.exports = { getGameById, searchGames };
