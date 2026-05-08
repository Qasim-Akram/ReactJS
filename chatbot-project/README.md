# Chatbot Project

A modern, interactive chatbot application built with React and Vite. This project features real-time chat messaging with an AI-powered chatbot backend, persistent message storage, and a clean, intuitive user interface.

## 🚀 Features

- **Interactive Chat Interface**: Send and receive messages in real-time with a chatbot
- **AI-Powered Responses**: Leverages the `supersimpledev` library for intelligent chatbot responses
- **Message Persistence**: Automatically saves chat history to browser's localStorage
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Auto-scroll**: Messages automatically scroll to the latest message
- **Clear History**: Option to clear all stored messages with a single click
- **Loading States**: Visual feedback when waiting for chatbot responses
- **Keyboard Shortcuts**: Press Enter to send messages, Escape to clear the input

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.4
- **Chatbot Library**: supersimpledev 8.6.4
- **Styling**: CSS3
- **Development Tools**: ESLint, React Hooks, React Refresh
- **Module System**: ES Modules

## 📦 Project Structure

```
chatbot-project/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx          # Input field and send button component
│   │   ├── ChatInput.css          # Styling for chat input
│   │   ├── ChatMessages.jsx       # Chat messages display container
│   │   ├── ChatMessages.css       # Styling for messages container
│   │   ├── ChatMessage.jsx        # Individual message component
│   │   └── ChatMessage.css        # Styling for individual message
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Application styling
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
└── .gitignore                      # Git ignore patterns
```

## 🎯 Components

### App.jsx
The main application component that:
- Manages chat messages state using React hooks
- Handles localStorage persistence
- Renders the ChatMessages display and ChatInput components
- Maintains default welcome messages

### ChatInput.jsx
Handles user input with features:
- Text input field for composing messages
- Send button with loading state indicator
- Clear All button to remove chat history
- Keyboard support (Enter to send, Escape to clear)
- Async message handling with loading states

### ChatMessages.jsx
Displays the conversation with:
- Container for all messages
- Auto-scrolling to latest message
- Mapping through messages array
- Individual ChatMessage component rendering

### ChatMessage.jsx
Individual message display component that:
- Shows message content
- Differentiates between user and robot messages
- Displays different styling based on sender

## 💾 Data Persistence

Chat messages are automatically saved to the browser's `localStorage` under the key `messages`. This allows:
- Chat history to persist across browser sessions
- Automatic loading of previous conversations
- Complete wipe with the "Clear All" button

## 📋 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Qasim-Akram/ReactJS.git
cd ReactJS/chatbot-project
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will open at `http://localhost:5173` (or the next available port).

### Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## 🎨 Styling

The project uses pure CSS for styling. Main style files:
- **index.css**: Global styles and typography
- **App.css**: Main application layout
- **ChatInput.css**: Input field and button styling
- **ChatMessages.css**: Messages container styling
- **ChatMessage.css**: Individual message styling

## 🤖 How the Chatbot Works

1. User types a message and presses Enter or clicks Send
2. The message is stored in state and displayed immediately
3. The app sends the message to the `supersimpledev` Chatbot API
4. The chatbot processes and returns a response
5. The response is displayed in the chat
6. All messages are saved to localStorage
7. User can continue the conversation or clear history

## 🐛 Keyboard Shortcuts

- **Enter**: Send message
- **Escape**: Clear input field

## 📝 Notes

- Messages are stored locally in the browser and are not synced across devices
- The chatbot responses come from the `supersimpledev` library
- Each message has a unique ID generated using `crypto.randomUUID()`
- The app prevents sending empty or whitespace-only messages
- Loading state prevents multiple requests while waiting for responses

## 🚀 Future Enhancements

- Integration with a backend API for multi-device synchronization
- User authentication and profiles
- Message export functionality
- Customizable chatbot personality/behavior
- Message search and filtering
- Dark mode theme
- Typing indicators
- Message reactions/emojis

## 📄 License

This project is part of the ReactJS learning repository.

## 👨‍💻 Author

**Qasim Akram** - [GitHub Profile](https://github.com/Qasim-Akram)


For questions or issues, please create an issue in the [ReactJS repository](https://github.com/Qasim-Akram/ReactJS).
