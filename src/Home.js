import React, { Component } from 'react'
import {Navigation} from './Navigation'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
            <div>
                <Navigation/>
                  <h2 className="m-3 d-flex justify-content-center color-white">Hayat Residency</h2>
                     <div className="gallery-images">
                        <div className='gallery-images-segment'>

                        </div>
                         <div className='gallery-images-segment'>

                        </div>
                        <div className='gallery-images-segment'>

                        </div>
                    </div>  
                  <p className='hometext'>    
                 
                    Explore Our Smart Collective of Business & Leisure Hotels with Added Assurance of Safety.

                    Experience a Vibrant Stay at our Contemporary Hayat Residency Road. Clean And Safe Rooms.

                    Member Special Benefits. Physical Distancing Norms.

                    Email: info@hotelhayatresorts.com, travel@hotelhayatresorts.com, snkrdm@gmail.com

                    Phone: +91 562 2230 161, 162, 163

                    Mobile: +91 7830 050 001, 9899 313 111, 9811 024 064

                    Fax: +91 562 2230 164

                    Address: Hotel Hayat Resorts Near Shilp Gram, Taj Mahal(Eastern Gate), Agra 282 001 (India)
                    </p>  
            </div>
        )
    }
}

export default Home