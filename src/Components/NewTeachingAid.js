import React, {Component} from 'react';
import UnderConstruction from './UnderConstruction';
import Form from "react-jsonschema-form";
import { WithContext as ReactTags } from 'react-tag-input';

export default class NewTeachingAid extends Component {
    constructor(props){
        super(props);
        
        this.state = {tags : [{}]};
        

        //mothods bindings
        this.createNewteachingAid = this.createNewteachingAid.bind(this);
        this.onErrorSubmit = this.onErrorSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    createNewteachingAid(form){
        
    }

    onErrorSubmit(err){
        console.error(err);
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    }

    render() {

        const newTeachinAidiUiSchema = {
            "tags": {
                "ui:widget": (props) => {
                    return (<ReactTags tags = {this.state.tags}
                                handleDelete={this.handleDelete}
                                handleAddition={this.handleAddition}
                                className = {{
                                            tags : 'ReactTags__tags',
                                            tagInput: 'tagInputClass',
                                            selected: 'ReactTags__selected',
                                            remove: 'ReactTags__remove',                
                                            }}/>
                            )
                }
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
                            onSubmit={this.createNewteachingAid}
                            onError={this.onErrorSubmit}>
                        </Form>
                        <UnderConstruction/>
                    </div>
                </div>
            </div>
        );
    }

   
}
