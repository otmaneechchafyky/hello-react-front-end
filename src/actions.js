// src/actions.js
export const FETCH_RANDOM_GREETING = 'FETCH_RANDOM_GREETING';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/greetings/random');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    dispatch({ type: FETCH_RANDOM_GREETING, payload: data.message });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};
