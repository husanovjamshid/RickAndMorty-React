import { Link, Outlet } from "react-router-dom";

export const News = () => {
  return (
    <>
      <div>
        <ul className="list-unstyled gap-4 d-flex me-auto">
          <li className="nav-item">
            <Link className="" to="uzbek">
              Uzbekistan
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="jahon">
              Jahon
            </Link>
          </li>
        </ul>
        <h3 className="text-center m-0">News</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          reprehenderit iusto minima, temporibus earum sequi saepe esse
          provident veniam doloremque quam, porro nisi exercitationem cum
          voluptas totam. Expedita cum itaque reprehenderit, sequi quae numquam
          alias eveniet incidunt modi libero soluta harum nihil vitae, vero ut!
          Doloribus culpa, id doloremque distinctio placeat quos, reiciendis
          temporibus ipsam unde nisi possimus? Fugiat, recusandae. Soluta
          assumenda placeat iusto quisquam vel beatae libero suscipit reiciendis
          molestiae illum doloribus delectus, quia reprehenderit, odio,
          doloremque ducimus quaerat? Cum, quae perferendis? Obcaecati rem
          mollitia, architecto in neque laboriosam ad omnis animi repellat.
          Maiores repudiandae, eum laboriosam nihil impedit nesciunt quis,
          ratione odit accusamus tempore beatae similique. Nam maxime
          exercitationem delectus voluptates optio. accusamus repellendus
          provident eveniet, ipsam fugiat illum quo molestias nemo!
        </p>
        <Outlet />
      </div>
    </>
  );
};
