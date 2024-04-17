const apiKeyWeather = '97cb760ca4da259357dd3ddf5279c663';
const apiKeyNews = '2066325526c14a45a1be11dd36b919fc';

async function fetchData() {
    const city = document.getElementById('cityInput').value;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`;
    const newsUrl = `https://newsapi.org/v2/top-headlines?q=${city}&apiKey=${apiKeyNews}`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    const newsResponse = await fetch(newsUrl);
    const newsData = await newsResponse.json();

    updateWeather(weatherData);
    updateNews(newsData.articles);
}

function updateWeather(data) {
    const weatherElement = document.getElementById('weatherData');
    if (data.weather) {
        weatherElement.innerHTML = `Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].main}`;
    } else {
        weatherElement.innerHTML = 'Weather data not found. Please verify your input or try alternate locations.';
    }
}

function updateNews(articles) {
    const newsElement = document.getElementById('newsData');
    if (articles.length > 0) {
        newsElement.innerHTML = articles.map(article => `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`).join('');
    } else {
        newsElement.innerHTML = 'No news found. Please verify your input or try alternate locations.';
    }
}