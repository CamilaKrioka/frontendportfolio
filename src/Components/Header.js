import React from "react";
import Particles from "react-particles-js";
import FotoPersonal from "./Styles/images/foto-perfil.jpg";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
      
    <div id="home">
      <div className="contenedor-imagen text-center text-typing "  >
        <Image src={FotoPersonal} roundedCircle  className="foto-personal" />
        <div className="text-center text-typing m-auto text-white">
          <p className="my-0">Camila Krioka</p>
          <p className="my-0">Desarrolladora web</p>
        </div>
      </div>
      <Particles
        params={{
            "particles":{
            "number":{
                "value":34,
            "density":{
                "enable":true,
                "value_area":1122.388442605866
            }
        },
        "color":{
            "value":"#FBFCFC"
        },
        "shape":{
            "type":"star",
            "stroke":{
                "width":0,
                "color":"#000000"
            },
            "polygon":{
                "nb_sides":11
            },
            "image":{
                "src":"img/github.svg",
                "width":100,
                "height":100
            }
        },
        "opacity":{
            "value":0.5,
            "random":false,
            "anim":{
                "enable":false,
                "speed":1,
                "opacity_min":0.1,
                "sync":false
            }
        },
        "size":{
            "value":63.131811330581804,
            "random":true,
            "anim":{
                "enable":false,
                "speed":40,
                "size_min":0.1,
                "sync":false
            }
        },
        "line_linked":{
            "enable":true,
            "distance":150,
            "color":"#ffffff",
            "opacity":0.4,
            "width":1
        },
        "move":{
            "enable":true,
            "speed":6,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"repulse"
            },
            "onclick":{
                "enable":true,
                "mode":"push"
            },
            "resize":true
        },
        "modes":{
            "grab":{
                "distance":119.88011988011988,
                "line_linked":{
                    "opacity":1
                }
            },
            "bubble":{
                "distance":400,
                "size":139.86013986013987,
                "duration":2,
                "opacity":8,
                "speed":3
            },
            "repulse":{
                "distance":200,
                "duration":0.4
            },
            "push":{
                "particles_nb":4
            },
            "remove":{
                "particles_nb":2
            }
        }
    },
    "retina_detect":true
}}

      />
    </div>
    
  );
  
};

export default Header;