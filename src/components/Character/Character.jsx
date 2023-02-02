import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Filters } from "../Filter/FilterBtn";
import { Pagination } from "../Pagination/Pagination";
import "./character.scss";

export const Character = () => {
  let [user, setUser] = useState([]);
  let [page, setPage] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");

  let filterLife = ["Alive", "Dead", "Unknown"];
  let filterGender = ["Female", "Male", "Genderless ", "Unknown"];

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}`;
  let { info, results } = user;
  console.log(search);
  useEffect(() => {
    (async () => {
      await fetch(api)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setUser(data);
          }
        });
    })();
  }, [api]);
  //   console.log(results);

  return (
    <main>
      <div className="container">
        <h1 className="py-3 text-center">Character</h1>

        <form className="w-50 mx-auto">
          <div className="input-group">
            <input
              onChange={(evt) => {
                setPage(1);
                setSearch(evt.target.value);
              }}
              type="search"
              className="form-control rounded-3"
              placeholder="Search..."
            />
            <button className="btn btn-primary rounded-3">Send</button>
          </div>
        </form>

        <div className="row py-5">
          <div className="col-md-3">
            <h3 className="text-center mb-3">Filter</h3>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 clasNames="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Filter by name
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {filterLife.map((item, index) => (
                      <Filters
                        key={index}
                        setState={setStatus}
                        id={index}
                        name="status"
                        text={item}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Filter by gender{" "}
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {filterGender.map((item, index) => (
                      <Filters
                        key={index}
                        setState={setGender}
                        id={index}
                        name="geder"
                        text={item}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Filter by location{" "}
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <button className="btn btn-primary">Location</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row g-4">
              {" "}
              {results?.length
                ? results.map((item) => (
                    <Card
                      key={item.id}
                      name={item.name}
                      image={item.image}
                      location={item.location.name}
                      gender={item.gender}
                      status={item.status}
                    />
                  ))
                : "Character not found"}
            </div>
            <Pagination setPage={setPage} page={info?.pages} />
          </div>
        </div>
      </div>
    </main>
  );
};
