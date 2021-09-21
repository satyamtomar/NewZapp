import React, { Component } from 'react'

export class Newscard extends Component {
    render() {
        let {title,description,imgurl,newsurl}=this.props;
          
        return (
            <div className="my-3">
              <div className="card" style={{width: "18rem"}}>
  <img src={!imgurl?"imgg.jpg":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>  
            </div>
        )
    }
}

export default Newscard
