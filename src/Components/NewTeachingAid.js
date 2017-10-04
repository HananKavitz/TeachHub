import React, {Component} from 'react';
import UnderConstruction from './UnderConstruction';
import Form from "react-jsonschema-form";

export default class NewTeachingAid extends Component {
    render() {

        const newTeachinAidiUiSchema = {
            "title": {
                "ui:widget": "password"
            }
        };

        const newTeachinAidSchema = {
            title: "Log in",
            type: "object",
            required: ["title"],
            properties: {
                title: {
                    type: "string",
                    title: "Title",
                    default: ""
                },
                subject: {
                    type: "string",
                    title: "Subject",
                    default: ""
                },
                forgotPassword: {
                    type: "string",
                    title: "Description",
                    default: ""
                },
                tags: {
                    type: "string",
                    title: "Tags"
                }

            }
        };
        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col-sm-6 col-xs-12">
                        <h2>Create new teaching aid</h2>
                        <Form
                            schema={newTeachinAidSchema}
                            uiSchema={newTeachinAidiUiSchema}
                            onSubmit={this.props.loginCallback}
                            onError={this.props.onErrorSubmit}>
                        </Form>
                        <UnderConstruction/>
                    </div>
                </div>
            </div>
        );
    }
}
