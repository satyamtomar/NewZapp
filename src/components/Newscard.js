import React from "react";

const Newscard=(props)=> {
    let { title, description, imgurl, newsurl, author, date, sources } =
      props;

    return (
      <>
        <div className=" border-1 border-bg-gray-600 flex flex-col" >
        
          <div className="items-center justify-center">
          <img
            src={!imgurl ? "imgg.jpg" : imgurl}
            // className="card-img-top"
            className=" rounded-md sm:rounded-none object-cover h-64 w-64 "
            alt="..."
          />
          </div>
          <div className="">
            <h5 className=" truncate font-bold text-lg">{title}</h5>
            <p className=" truncate">{description}</p>

            <p className=" pt-2">
              <small className="text-muted">                
                <strong>By:</strong> {author ? author : "unknown"}  <strong>At:</strong> {new Date(date).toGMTString()}  
              </small>
            </p>
            <div className="flex justify-between items-center pt-4">
            <a rel="noreferrer" href={newsurl} className="btn btn-sm btn-dark ">
              Read More
            </a>
            <span className="badge  bg-dark" >
              {sources}
            </span>
            </div>
          </div>
        </div>
        </>
    );
  }


export default Newscard;
