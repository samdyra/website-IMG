import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import { SliderData, SliderText } from "../../assets/object/SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DoubleSlider() {
  const {
    descContainer,
    galleryElementContainer2,
    containerSection,
    halfpage,
    slider1,
    slider2,
    title,
    madeElementButton,
  } = style;

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className={containerSection}>
      <div className={halfpage}>
        <div className={title}>
          <h1>Majalah Parade Wisuda</h1>
        </div>
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          className={slider1}
          fade={true}
          arrows={false}
        >
          {SliderText.map((text, index) => {
            return (
              <div className={descContainer}>
                <p style={{ paddingInline: "20px" }}>{text.desc}</p>

                <div href="/WebGIS" className={madeElementButton}>
                  <p>Click Here to Read</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className={halfpage}>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          className={slider2}
          arrows={true}
        >
          {SliderData.map((data, index) => {
            return (
              <div className={galleryElementContainer2}>
                <img src={data.image} alt="gallery" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

// const DoubleSlider = () => {
//   const {
//     wrapperCard,
//     wrapperGallery,
//     wrapperVerticalCard,
//     galleryElementContainer,
//     galleryWrapper,
//     galleryCarousel,
//     madeElementContainer,
//     madeElementImage,
//     madeElementContent,
//     madeElementButton,
//     madeElementWrapper,
//     verticalCardContainer,
//     verticalCardImage,
//     verticalCardContent,
//     verticalCardButton,
//     verticalCardWrapper,
//   } = style;

//   let nav1 = null;
//   let nav2 = null;

//   useEffect(() => {
//     const nav1 = slider1;
//     const nav2 = slider2;

//   }, []);

//   const gallerySettings = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     swipeToSlide: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     centerMode: true,
//     centerPadding: "200px",
//     asNavFor: nav1,
//     ref: (slider) => (slider1 = slider),
//   };

//   const gallerySettings2 = {
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     swipeToSlide: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     rtl: true,
//     centerMode: true,
//     arrows: false,
//     centerPadding: "200px",
//     asNavFor: nav2,
//     ref: (slider) => (slider2 = slider),
//   };
//   return (
//     <div className={galleryWrapper}>
//       <div className={galleryCarousel}>
//         <Slider {...gallerySettings}>
//           {SliderData.map((data, index) => {
//             return (
//               <div className={galleryElementContainer}>
//                 <img src={data.image} alt="gallery" />
//               </div>
//             );
//           })}
//         </Slider>

//         <Slider {...gallerySettings2}>
//           {SliderData.map((data, index) => {
//             return (
//               <div className={galleryElementContainer}>
//                 <img src={data.image} alt="gallery" />
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default class AsNavFor extends Component {
//   constructor(props) {
//     super(props);
//     const { galleryElementContainer } = style;
//     this.state = {
//       nav1: null,
//       nav2: null,
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Slider Syncing (AsNavFor)</h2>
//         <h4>First Slider</h4>
//         <Slider
//           asNavFor={this.state.nav2}
//           ref={(slider) => (this.slider1 = slider)}
//           arrows={true}
//           dots={true}
//         >
//           {SliderData.map((slide) => {
//             return (
//               <div className={galleryElementContainer}>
//                 <img src={slide.image}></img>
//               </div>
//             );
//           })}
//         </Slider>
//         <h4>Second Slider</h4>
//         <Slider
//           asNavFor={this.state.nav1}
//           ref={(slider) => (this.slider2 = slider)}
//           slidesToShow={1}
//           swipeToSlide={true}
//           focusOnSelect={true}
//           arrows={true}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
