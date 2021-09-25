import React from "react";

const Newscard=(props)=> {
    let { title, description, imgurl, newsurl, author, date, sources } =
      props;

    return (
      <div className="my-3">
        <div className="card" >
        
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-dark" >
              {sources}
            </span>
            </div>
          <img
            src={!imgurl ? "imgg.jpg" : imgurl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
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


export default Newscard;
