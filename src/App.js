import "./App.css";
import Profile from "./profile/profile";
function App() {
  return (
    <header className="App-header">
    <Profile
      fullName="Chadi Mola"
      bio="I am a highly skilled developer with a huge motive to learn more and more"
      profession="Full Stack js Deveolper"
    >
      <img src="/mypic.jpeg" alt="" width="200px"></img>
    </Profile>
    </header>
  );
}
export default App;
