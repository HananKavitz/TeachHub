import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class UserAlreadyExist extends Component {

	render() {

		return (
			< div className = "static-modal" >
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Bad username</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						This username already exist
					</Modal.Body>

					<Modal.Footer>
						<Link to={'Signin'}>
							<Button bsStyle="primary" onClick = {this.props.toggleUserExist}>
								Back to login
							</Button>
						</Link>

						<Link to={'home'}>
							<Button onClick = {this.props.toggleUserExist}>
								cancel
							</Button>
						</Link>
					</Modal.Footer>

				</Modal.Dialog>
			< /div>
		);

    }
}
