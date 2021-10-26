import "./App.css";

// import Users from "./components/nativeFetch/Users";
import UsersAxios from "./components/Axios/UsersAxios";
function App() {
  return (
    <div className="App">
      <UsersAxios />
    </div>
  );
}

export default App;
