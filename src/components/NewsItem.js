import React from "react";
import PropTypes from "prop-types";

const NewsItem = (props) =>{
    let { title, description, imageurl, newsurl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
            // position-absolute top-0 translate-middle 
              className="badge rounded-pill bg-danger"
              // style={{ left: "80%", zIndex: "1" }}
            >
              {source}
            </span>
            </div>
            <img
              src={
                !imageurl
                  ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                  : imageurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>

              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsurl}
                target="_blank"
                className="btn btn-dark btn-sm"
              >
                Read more
              </a>
            </div>
            </div>
          </div>
       
      
    );
  }


export default NewsItem;
