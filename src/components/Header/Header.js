import { NavLink, Link } from "react-router-dom";
import rick from "../../assets/img/rick.jpg";
export const Header = () => {
  return (
    <header className="shadow w-100">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          {" "}
          <img style={{ width: "170px", height: "80px" }} src={rick} alt="" />
        </Link>
        <nav>
          <ul className="list-unstyled d-flex align-items-center gap-3 ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "fw-bold text-black text-decoration-none"
                    : "text-black text-decoration-none"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "fw-bold text-black text-decoration-none"
                    : "text-black text-decoration-none"
                }
                to="/location"
              >
                Location
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "fw-bold text-black text-decoration-none"
                    : "text-black text-decoration-none"
                }
                to="/episode"
              >
                Episode
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
