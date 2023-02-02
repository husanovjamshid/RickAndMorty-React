import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";

export const Episode = () => {
  let [user, setUser] = useState([]);
  let [page, setPage] = useState(1);

  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  let { info, results } = user;

  let [episodeNumber, setEpisodeNumber] = useState(1);
  let [episode, setEpisode] = useState([]);
  //   let { info, results } = episode;
  let epApi = `https://rickandmortyapi.com/api/episode/${episodeNumber}`;

  useEffect(() => {
    (async () => {
      await fetch(epApi)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setEpisode(data);
            // console.log(data);
          }
        });
    })();
  }, [epApi]);
  // console.log(episode.info);

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

  return (
    <main>
      <div className="container">
        <h1 className="py-2 text-center">Episode name: {episode.name}</h1>
        <h3 className="text-center m-0">Air Date: {episode.air_date}</h3>

        <div className="row py-5">
          <div className="col-md-3">
            <h3 className="text-center mb-3">Episode </h3>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              {}
            </select>
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
