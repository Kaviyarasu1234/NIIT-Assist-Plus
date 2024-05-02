import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import loading from '../../../assets/animation/loading.json';
import PropTypes from "prop-types";



const LazyLoading =  () => {
  const lazyRef = useRef<LottieRefCurrentProps>(null);

  return (
     <div style={{
               height : "100vh",
               width : "100%",
               display : "flex",
               justifyContent : "center",
               alignItems : "center",

     }}>
          <div>
               <Lottie animationData={loading}/>
          </div>
    </div>
  );
};

LazyLoading.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};

export default LazyLoading;