export const Card = ({ name, image, location, gender, status }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card position-relative shadow">
          {(function () {
            if (status === "Alive") {
              return (
                <span
                  style={{ top: "7px", right: "7px" }}
                  className="position-absolute badge bg-success px-3 py-2 "
                >
                  {status}
                </span>
              );
            }
            if (status === "Dead") {
              return (
                <span
                  style={{ top: "7px", right: "7px" }}
                  className="position-absolute badge bg-danger px-3 py-2 "
                >
                  {status}
                </span>
              );
            } else {
              return (
                <span
                  style={{ top: "7px", right: "7px" }}
                  className="position-absolute badge bg-secondary px-3 py-2 "
                >
                  {status}
                </span>
              );
            }
          })()}
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text fs-5 m-0">Last Location</p>
            <p className="card-text fs-6 m-0">{location}</p>
            <p className="card-text fs-5">Gender: {gender}</p>
            <a href="/" className="btn btn-primary">
              More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
