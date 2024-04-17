# Weather and News Dashboard

## Overview
This web application provides real-time weather updates and news headlines based on a user-specified city. It uses the OpenWeatherMap API for weather data and the NewsAPI for news headlines.

## APIs Used
- **OpenWeatherMap API**: Provides the current weather data.
- **NewsAPI**: Provides the latest news headlines.

## How to Run
1. Clone this repository.
2. Replace `YOUR_OPENWEATHERMAP_API_KEY` and `YOUR_NEWSAPI_API_KEY` in the `app.js` file with your API keys.
3. Open `index.html` in your browser.

## Features
- **Search by City**
  - Users can enter the name of a city to retrieve current weather conditions and top news headlines.
  - Examples:
    - **Correct**: Enter `New York` instead of `Newyork` to ensure accurate results.
    - **Correct**: Use `Los Angeles` not `Losangeles`.
    - **Correct**: Type `San Francisco` rather than `Sanfrancisco`.
  - Tips for Best Results:
    - Make sure to spell city names correctly and use proper spacing where applicable.
    - Use the full name of the city (e.g., `Salt Lake City` instead of `Salt Lake`).

- **Weather Information Display**
  - The dashboard displays temperature, general weather conditions, and other meteorological data.

- **News Headlines Display**
  - Top news headlines related to the searched city are displayed.

## Future Enhancements
- Add error handling for API requests.
- Include more detailed weather information and forecasts.
- Extend the news section with additional filtering options.
- Implement autocomplete functionality for typing city names.