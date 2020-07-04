import React from 'react';
import {VisitingCardComponent} from "./components/VisitingCardComponent";
import htmlToImage from 'html-to-image';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>This is where we will test the Visiting Cards generator</p>
          <div id={"image-section"}>
              <VisitingCardComponent/>
          </div>


          <button onClick={()=>{
                const node: any =  document.getElementById('image-section');
              htmlToImage.toPng(node)
                  .then(function (dataUrl) {
                      let img = new Image();
                      img.src = dataUrl;
                      document.body.appendChild(img);
                  })
                  .catch(function (error) {
                      console.error('oops, something went wrong!', error);
                  });
          }}>get Image</button>
      </header>
    </div>
  );
}

export default App;
