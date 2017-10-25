
import React, {Component} from 'react';



export default class Header extends Component {

  render() {
    var mystyle= {
      color:"lightblue",
      background: "rgb(106, 187, 227)",
      height: "200px"
      }


      return (
        <div className='container' style={mystyle}>
              <div className="row row-content col-xs-2" >
                 <img src="./static/images/icon1.png" alt="logo" style={{"width":"120px","height":"120px","paddingTop":"20px"}}/>
              </div>
              <div className="row row-content col-xs-9" >
                 <p style={{"fontSize":"50pt","color":"#2028e8","paddingTop":"20px"}}>TeachingMadEasy

                 {/* <span style={{"fontSize":"20pt"}}> your teaching aid location</span> */}
                 </p>
              </div>


          </div>
        )
      }

}
