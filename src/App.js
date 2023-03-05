import React from "react";
import jp_0 from "./jp_0.png"
import jp_5 from "./jp_5.png"
import jp_4 from "./jp_4.png"
import jp_3 from "./jp_3.png"
import jp_2 from "./jp_2.png"
import jp_1 from "./jp_1.png"

function App() {
  const [angle, setAngle] = React.useState(90);
  const [angle1, setAngle1] = React.useState(0);
  const [angle2, setAngle2] = React.useState(180);
  const [angle3, setAngle3] = React.useState(-90);
  const [angle4, setAngle4] = React.useState(0);
  const [angle5, setAngle5] = React.useState(-180);

  const rotate = () => {
    setAngle((prev) => prev + 90);
  };
  const rotate1 = () => {
    setAngle1((prev) => prev - 90);
  };
  const rotate2 = () => {
    setAngle2((prev) => prev - 90);
  };
  const rotate3 = () => {
    setAngle3((prev) => prev + 90);
  };
  const rotate4 = () => {
    setAngle4((prev) => prev - 90);
  };
  const rotate5 = () => {
    setAngle5((prev) => prev + 90);
  };

  return (
    <div className="App" style={{height: "101vh"}}>
      <div
        className="box"
        style={{
          cursor: "pointer",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          width: "600px",
          height: "600px",
          maxHeight: "600px",
          outline: "2px solid black",
          transform: `rotate(${angle1}deg)`,
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          backgroundColor: "white"
        }}
        onClick={rotate1}
      ><img src={jp_0} alt="jp_0" /></div>
      <div
        className="box"
        style={{
          cursor: "pointer",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          width: "500px",
          height: "500px",
          outline: "2px solid black",
          transform: `rotate(${angle}deg)`,
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          backgroundColor: "white"
        }}
        onClick={rotate}
      ><img src={jp_1} alt="jp_1" /></div>
      <div
        className="box"
        style={{
          cursor: "pointer",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          width: "400px",
          height: "400px",
          border: "2px solid black",
          transform: `rotate(${angle2}deg)`,
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          backgroundColor: "white"
        }}
        onClick={rotate2}
      ><img src={jp_2} alt="jp_2" /></div>
            <div
        className="box"
        style={{
          cursor: "pointer",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          width: "300px",
          height: "300px",
          border: "2px solid black",
          transform: `rotate(${angle3}deg)`,
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          backgroundColor: "white"
        }}
        onClick={rotate3}
      ><img src={jp_3} alt="jp_3" /></div>
                  <div
        className="box"
        style={{
          cursor: "pointer",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          width: "200px",
          height: "200px",
          border: "2px solid black",
          transform: `rotate(${angle4}deg)`,
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          backgroundColor: "white"
        }}
        onClick={rotate4}
      ><img src={jp_4} alt="jp_4" /></div>
       <div
        className="box"
        style={{
          cursor: "pointer",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          width: "100px",
          height: "100px",
          border: "2px solid black",
          transform: `rotate(${angle5}deg)`,
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          backgroundColor: "white"
        }}
        onClick={rotate5}
      ><img src={jp_5} alt="jp_0" /></div>
    </div>
  );
}

export default App;
