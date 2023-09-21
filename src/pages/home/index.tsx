import { Header } from "@components";
import { Outlet } from "react-router-dom";
import './styles.scss'

function HomePage() {
  return (
    <main className="d-flex flex-column align-items-center mt-5">
      <Header />
      <Outlet />
    </main>
  );
}

export default HomePage;
