
import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';




export default class MyDataBox extends Component {

  render() {
    var mystyle= {
      border :"line",
      background: "rgb(106, 187, 227)",

      }


      return (
        <div>
          <Panel header="my title" bsStyle="primary">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium mattis eros, ac ultrices mauris dapibus dictum. Vestibulum erat felis, porta nec efficitur sit amet, vulputate a lacus. Integer a ante viverra, volutpat turpis a, vulputate nunc. Nullam eleifend in purus nec finibus. Proin a mauris dictum, consequat mi vitae, fermentum ante. Cras risus ipsum, pulvinar at ligula sit amet, vulputate rhoncus risus. Nunc libero risus, consequat non sodales ut, pharetra a elit.

          </p>
          <Link to={'home'}> Read More...</Link>
            </Panel >
       </div>



        )
      }

}
