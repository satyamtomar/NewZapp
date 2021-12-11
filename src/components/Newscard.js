import React from "react";

const Newscard=(props)=> {
    let { title, description, imgurl, newsurl, author, date, sources } =
      props;

    return (
      <>
        <div  className="border-1 border-bg-gray-600">
        
          <div className="  flex flex-col  py-2 px-2">
          <img
            src={!imgurl ? "imgg.jpg" : imgurl}
            // className="card-img-top"
            className="object-cover h-64 w-full  "
            alt="..."
          />
         
          <div className="flex flex-col">
            <h5 className=" truncate font-bold text-lg">{title}</h5>
            <p className=" truncate">{description}</p>

            <p className=" pt-2 flex flex-col space-y-1">
              <small className="text-thin ">                
                <strong>By:</strong> {author ? author : "unknown"}  
                </small>
                <small>
                <strong>At:</strong> {new Date(date).toGMTString()}  
              </small>
            </p>
            <div className="flex flex-row justify-between items-center py-2">
            <a rel="noreferrer" href={newsurl} className="btn btn-sm btn-dark ">
              Read More
            </a>
            <span className="badge  bg-dark" >
              {sources}
            </span>
            </div>
          </div>
        </div>
        </div>
        </>
    );
  }


export default Newscard;
