import React, { Component } from "react";

export class Newscard extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, sources } =
      this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!imgurl ? "imgg.jpg" : imgurl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span className="position-absolute top-0   translate-middle badge rounded-pill bg-dark" style={{left:"90%", zIndex:'1'}}>
              {sources}
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <p className="card-text">
              <small className="text-muted">                
                <strong>By:</strong> {author ? author : "unknown"}  <strong>At:</strong> {new Date(date).toGMTString()}  
              </small>
            </p>
            
            <a rel="noreferrer" href={newsurl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newscard;
