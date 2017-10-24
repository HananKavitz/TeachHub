import React, {Component} from 'react';
//import TeachingAidsComponent from '../Components/TeachingAids';
import UnderConstruction from '../Components/UnderConstruction';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
class TeachingAidsContainer extends Component {

    // constructor(props) {
    //     super(props);
    //
    // }



    render() {
        // need to be loged in to create new teaching aids
        const newTeachingAidButton = this.props.isLogedIn ?
        <Link to = {'NewTeachingAid'}>
            <Button bsStyle="primary">New teaching aid</Button>
        </Link>:null;
        
        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col-xs-12">
                        <h2>
                            Teaching Aids
                        </h2>
                        {newTeachingAidButton}
                        < UnderConstruction />
                    </div>
                </div>
            </div>

        )
    }
}

export default TeachingAidsContainer;
