import UserGreeting from "./UserGreeting";

function App() {
  return (
    <div className="App">
      <UserGreeting name="Whodis" isLoggedIn={true}></UserGreeting>
    </div>
  )
}

export default App;