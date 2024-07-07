# Movix_

An application that provides comprehensive information about movies, series, and animes, powered by the TMDB API. Users can browse categories, use advanced search, and manage their watchlists and favorites.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Usage](#api-usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Display Information**: Detailed information about movies, series, and animes from TMDB API.
- **Categories**: Browse movies and series by categories such as genre, year, etc.
- **Advanced Search**: Search for specific movies, series, or animes by title, genre, or other criteria.
- **Filter and Sort**: Filter search results and sort them by various attributes.
- **User Authentication**: Firebase authentication with options for anonymous sign-in, email and Google sign-in, and email sign-up.
- **Watchlist and Favorites**: Users can add movies, series, or animes to their watchlist and mark favorites.
- **Profile Management**: Access to a profile section for authenticated users to manage their watchlist and favorites.
- **Proxy Server**: Developed a Node.js and Express proxy server to reroute requests to TMDB API due to government restrictions.

## Demo
- ![Demo Screenshot](https://i.ibb.co/WtgB06K/Screenshot-52.png)

## Technologies Used
- **Frontend**: React, Chakra UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Firebase Authentication

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Set up environment variables (e.g., Firebase credentials, MongoDB connection string).
5. Start the development server with `npm start`.

## Usage
- Once set up, navigate to the application URL in your browser.
- Browse movies, series, and animes, use advanced search, add to watchlist, and mark favorites.

## API Usage
- The proxy server routes all TMDB API requests through the backend to ensure seamless access to movie, series, and anime data.

## Contributing
- Contributions are welcome! Please fork the repository and submit pull requests.
- Report issues or suggest improvements by opening an issue in the repository.

## License
- This project is licensed under the MIT License.
- Acknowledgments to TMDB for providing movie, series, and anime data.
