import { Github, Globe2 } from "react-bootstrap-icons";

function Card(props) {
  return (
    <div className="card h-100">
      <img src={props.image} className="card-img-top" alt={props.heading} />
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <Github size={26} />
          <span className="ms-1">{"GitHub"}</span>
        </a>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <Globe2 size={26} />
          <span className="ms-1">{"Live Site"}</span>
        </a>
      </div>
    </div>
  );
}

export default Card;