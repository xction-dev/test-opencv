import "./App.css";
import cv from "@techstark/opencv-js";

const sampleVideoURL =
  "https://d2yo7lrb9dagdw.cloudfront.net/hd/devsample_A_hd.mp4";

function App() {
  return (
    <div>
      <video
        src={sampleVideoURL}
        onCanPlay={(e) => {
          const capture = new cv.VideoCapture(e.target as HTMLVideoElement);
          console.dir(capture);
        }}
      />
    </div>
  );
}

export default App;
