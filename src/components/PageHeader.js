import React from 'react';
import PropTypes from 'prop-types';


const PageHeader = (props) => {
  const {title, imageList,backGroundImage} = props;

  //console.log(imageList.map(text => text.image.find(element => element.name ==="example.png")))
  //const newLogo = imageList[0] && imageList[0]["image"].map(text=>text.name === "example.png")
  //const headerBackground = imageList[0] && imageList[0]["image"].map(text=>text.url)
  const officialLogo = "https://res.cloudinary.com/dr33x9zki/image/upload/v1596447437/lotus_11a4244c92.png"
  return (
  <div className='page-header'>
    <div className="container-fluid" style={{backgroundColor: "#8d91da"}}> {/* style = {{backgroundImage: `url(${backGroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50px"}}>*/}
            {/*<div className="d-flex justify-content-around h3 mb-0">*/}
        <div className="row justify-content-center h3 my-0 py-2 text-white" style={{backgroundColor:"#8d91da"}}>
              <div className="col-8">
                  <span className="bd-highlight">Samadhi </span>
                  <img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/>
              </div>
              <div className="col-0 pr-3">
                <span className="bd-highlight">English</span>
              </div>
        </div>
        <div className="row justify-content-center my-0 h3 pb-1 px-4 text-white">
          <div className="col-0">
            <span className="bd-highlight px-0">{title}</span>
          </div>
        </div>
    </div>
  </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader;
