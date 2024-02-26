import React from "react";
import "./card.css";
import SS from './SS1.jpg';
export default function cardpic() {

    const myStyle = {
        backgroundImage: `url(${SS})`,
        backgroundSize: "cover",
    }
    return (
        <div class="phoneContainer">
            <div class="screen" style={myStyle}>
                <div class="camera"></div>
            </div>
            {/* <img src={SS} alt="" /> */}
        </div>
  );
}
