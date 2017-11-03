import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.closeCallback = this.closeCallback.bind(this);
    }

    closeCallback(){
		window.sessionStorage.removeItem('userName');
		window.sessionStorage.removeItem('authToken');
        this.props.route.updateLoginCallback(false,'');
    };

    render(){
        return (

			< div className = "static-modal" >
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Logout</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						Are you sure you want to logout?
					</Modal.Body>

					<Modal.Footer>
						<Link to={'Home'}>
							<Button bsStyle="primary" onClick = {this.closeCallback} style = {{margin : '3px'}}>
								Log out
							</Button>
						</Link>

						<Link to={'Home'}>
							<Button data-dismiss="modal" style = {{margin : '3px'}}>
								Cancel
							</Button>
						</Link>
					</Modal.Footer>

				</Modal.Dialog>
			< /div>
        )
    }
}
