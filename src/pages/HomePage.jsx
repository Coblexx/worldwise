import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>Homepage</h1>
      <Link to="/app">Pricing</Link>
    </div>
  );
}

export default HomePage;
