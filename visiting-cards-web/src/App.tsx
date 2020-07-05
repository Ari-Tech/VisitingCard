import React from 'react';
import {VisitingCardComponent} from "./components/VisitingCardComponent";
import htmlToImage from 'html-to-image';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div id={"image-section"}>
                    <VisitingCardComponent address={'16 Ferraria Park, #909-123, Singapore'}
                                           chat={{id: 'john.doe87', appName: 'Skype'}}
                                           company={'JPMorgan Chase'}
                                           firstName={'Arindam'}
                                           lastName={'Lahiri'}
                                           linkedInUrl={'https://www.linkedin.com/someURL/'}
                                           selfDescription={'Front-End Developer with 10+ yrs experience in SDLC'}
                                           emails={[
                                               {
                                                   display: 'abc@def.com',
                                                   type: 'personal'
                                               }
                                           ]}
                                           phones={[
                                               {
                                                   display: '+65 1234 5678 (p)',
                                                   type: 'personal'
                                               },
                                               {
                                                   display: '+65 0000 6276',
                                                   type: 'work'
                                               }
                                           ]}
                    />
                </div>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <button onClick={() => {
                                const node: any = document.getElementById('image-section');
                                htmlToImage.toPng(node)
                                    .then(function (dataUrl) {
                                        let img = new Image();
                                        img.src = dataUrl;
                                        var a = document.createElement('a');
                                        a.setAttribute('href', dataUrl);
                                        a.setAttribute("target", "_blank")
                                        a.text = "download"
                                        //  document.body.appendChild(a)
                                        a.click()

                                    })
                                    .catch(function (error) {
                                        console.error('oops, something went wrong!', error);
                                    });
                            }}>get Image
                            </button>
                        </div>
                    </div>
                </div>


            </header>
        </div>
    );
}

export default App;
