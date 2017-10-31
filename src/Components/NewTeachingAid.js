import React, {Component} from 'react';
import UnderConstruction from './UnderConstruction';
import Form from "react-jsonschema-form";
import { WithContext as ReactTags } from 'react-tag-input';



export default class NewTeachingAid extends Component {
    constructor(props){
        super(props);
        
        this.state = {tags : []};
        

        //mothods bindings
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
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
            },
            description : {
                "ui:widget" : "textarea"
            },
            forGrades : {
                "ui:options" : {
                    addable : true,
                    removable : true
                }
            }
        };

        const newTeachinAidSchema = {
            title: "",
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
                description: {
                    type : "string",
                    title : "Description"
                },
                files: {
                    type: "array",
                    title: "Share your teaching aid",
                    items: {
                      type: "string",
                      format: "data-url"
                    }
                },
                tags: {
                    type: "string",
                    title: "Tags"
                },
                language : {
                    type : "string",
                    title : "Language",
                    enum : this.props.languages,
                    default : 'English'
                },
                forGrades : {
                    type : "array",
                    title : "Suitable for grades",
                    items : {type : "string"}
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
                            onSubmit={this.props.createNewteachingAid}
                            onError={this.props.onErrorSubmit}>
                        </Form>
                        <UnderConstruction/>
                    </div>
                </div>
            </div>
        );
    }

   
}
