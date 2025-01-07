import React from "react";
import { isMobile } from "../../Helpers/mobileResponsive";

const VideoEmbed = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width={isMobile ? "331px" : "1000px"}
              height={isMobile ? "180.46px" : "500px"}
              style={{ borderRadius: "25px" }}
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/rpWtRXSIjbc"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
