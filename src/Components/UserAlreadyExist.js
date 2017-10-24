import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const UserAlreadyExist = (props) => {
	return (
		<div className = "static-modal" >
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Bad username</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					This username already exist
				</Modal.Body>

				<Modal.Footer>
					<Link to={'Signin'}>
						<Button bsStyle="primary" onClick = {props.toggleUserExist} style = {{padding : 5}}>
							Back to registeration
						</Button>
					</Link>

					<Link to={'home'}>
						<Button onClick = {props.toggleUserExist}>
							cancel
						</Button>
					</Link>
				</Modal.Footer>

			</Modal.Dialog>
		</div>
	);

    
}
export default UserAlreadyExist;

UserAlreadyExist.propTypes = {
    toggleUserExist: PropTypes.func.isRequired
};
