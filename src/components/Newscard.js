import React from "react";

const Newscard=(props)=> {
    let { title, description, imgurl, newsurl, author, date, sources } =
      props;

    return (
      <>
        <div  className="border-4 border-gray-300 shadow-md shadow-cyan-500/100 rounded-lg text-gray-300">
        
          <div className="  flex flex-col  py-2 px-2">
          <img
            src={!imgurl ? "imgg.jpg" : imgurl}
            className="object-cover h-64 w-full  "
            alt="..."
          />
         
          <div className="flex flex-col">
            <h5 className=" truncate font-bold text-lg">{title}</h5>
            <p className=" truncate">{description}</p>

            <p className=" pt-2 flex flex-col space-y-1">
              <small className="text-thin truncate">                
                <strong>Author:</strong> {author ? author : "unknown"}  
                </small>
                <small className="text-thin truncate">
                <strong>Published At:</strong> {new Date(date).toGMTString()}  
              </small>
            </p>
            <div className="flex flex-row justify-between items-center py-2">
            <a rel="noreferrer" href={newsurl} className="btn btn-sm btn-dark truncate shadow-md shadow-cyan-500/100">
              Read More
            </a>
            <span className="badge  bg-dark shadow-md shadow-cyan-500/100" >
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
