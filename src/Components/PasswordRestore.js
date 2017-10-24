import React, {Component} from 'react';
import UnderConstruction from './UnderConstruction';
import Form from "react-jsonschema-form";

class PasswordRestore extends Component {

    constructor(props) {
        super(props);

        this.onErrorSubmit = this.onErrorSubmit.bind(this);
        this.restoreCallback = this.restoreCallback.bind(this);

    }

    restoreCallback() {
        //need to send "restore" email here
    }

    onErrorSubmit(error) {
        console.log(error);
    }

    render() {
        const restoreSchema = {
            title: "I forgot my password",
            type: "object",
            required: [
                "username", "email"
            ],
            properties: {
                username: {
                    type: "string",
                    title: "User name",
                    default: ""
                },
                email: {
                    type: "string",
                    title: "Email",
                    default: ""
                }
            }
        };

        const restoreUiSchema = {
            "email": {
                "ui:widget": "email"
            }
        };

        return (
            <div className="container">
                <div className="row row-content">

                    <div className="col-sm-6 col-xs-12">
                        <Form
                            schema={restoreSchema}
                            uiSchema={restoreUiSchema}
                            onSubmit={this.restoreCallback}
                            onError={this.onErrorSubmit}></Form>

                    </div>
                    <UnderConstruction/>
                </div>

            </div>
        );
    }
}

export default PasswordRestore;
