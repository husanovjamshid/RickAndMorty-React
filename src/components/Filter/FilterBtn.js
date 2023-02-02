export const Filters = ({ text, name, id, setState,  }) => {
  return (
    <div className="m-0">
      <input
        type="radio"
        className="btn-check"
        id={`btn-check-outlined-${text}`}
        autoComplete="off"
        name={name}
      />
      <label
        onClick={(evt) => {
            setState(evt.target.textContent);
        //   setStatus(evt/.target.textContent);
        }}
        className="btn btn-outline-primary"
        htmlFor={`btn-check-outlined-${text}`}
      >
        {text}
      </label>
      <br />
    </div>
  );
};
