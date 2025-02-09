import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>SPORTSEE</h1>
      <p>Choisissez un utilisateur :</p>
      <button>
        <Link to="/user/12">Karl</Link>
      </button>
      <button>
        <Link to="/user/18">Cecilia</Link>
      </button>
    </div>
  );
}

export default Home;