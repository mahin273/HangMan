# 🎮 Hangman Challenge💀

A classic Hangman game built with React. Players try to guess a hidden word by suggesting letters within a certain number of attempts.

## ✨ Features

- **Classic Mode:** Enter a secret word to start the game.
- **Single-Player Mode:** Play against the computer with words served from `WordServer`.
- Guess letters using on-screen buttons.
- Visual hangman drawing updates with each wrong guess.
- Responsive and interactive UI.

## Screenshot

![Alt text](/ss.png)

## 🛠️ Tech Stack

- **Frontend:** React with js, Vite
- **Styling:** TailwindCSS
- **Backend (for Single-Player):** WordServer (Node.js)

## 🚀 Get Started in Minutes

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mahin273/HangMan.git
    ```

2. Navigate to the project directory:

    ```bash
    cd HangMan
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

### Running the Project

```bash
npm run dev
```

or

```bash
yarn dev
```

**(Note: For single-player mode, ensure [WordServer](https://github.com/mahin273/WordServer) is also running.)**

### 📂 Project Structure Overview

```bash
HangMan/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button/
│   │   ├── HangMan/
│   │   ├── LetterButtons/
│   │   ├── MaskedText/
│   │   ├── TextInput/
│   │   └── TextInputForm/
│   ├── pages/
│   │   ├── PlayGame.jsx
│   │   ├── Home.jsx
│   │   └── StartGame.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
