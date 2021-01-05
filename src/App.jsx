import "./App.scss";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <p className="text-white text-4xl text-center my-8 react">
        We are coming soon
      </p>
      <p className="text-white sm:w-auto text-center node">
        We are working very hard to add new features and improve the usability
        of our site. <br /> In the meantime, scroll down to know a little more
        about this new project.
      </p>
    </div>
  );
}

export default App;
