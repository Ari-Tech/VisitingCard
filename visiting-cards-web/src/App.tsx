import React from 'react';
import {VisitingCardComponent} from "./components/VisitingCardComponent";
import htmlToImage from 'html-to-image';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div id={"image-section"}>
              <VisitingCardComponent address={'16 Flora Drive'}
              chat={{id:'arindam.lahiri88', appName:'Skype'}}
              company={'JPMorgan Chase'}
                                    firstName={'Arindam'}
                                     lastName={'Lahiri'}
                                     linkedInUrl={'https://www.linkedin.com/someURL/'}
                                     selfDescription={'Front-End Developer with 10+ yrs experience in SDLC'}
                                     emails={[
                                         {
                                             display:'a@b.c',
                                             type:'personal'
                                         },
                                         {
                                             display:'a@b.c',
                                             type:'work'
                                         }
                                     ]}
                                     phones={[
                                         {
                                             display:'+65 1234 5678 (p)',
                                             type:'personal'
                                         },
                                         {
                                             display:'+65 8823 xxxx',
                                             type:'work'
                                         }
                                     ]}
              />
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
