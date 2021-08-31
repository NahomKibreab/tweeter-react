import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import TweetList from "./components/TweetList";
import TweetForm from "./components/TweetForm";
import "./App.css";

function App() {
  return (
    <body>
      <Navigation />
      <Profile />
      <main class="container">
        <TweetForm />
        <TweetList />
      </main>
    </body>
  );
}

export default App;
