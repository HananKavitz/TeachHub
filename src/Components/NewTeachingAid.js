import React, {Component} from 'react';
import UnderConstruction from './UnderConstruction';
import Form from "react-jsonschema-form";
import { WithContext as ReactTags } from 'react-tag-input';



export default class NewTeachingAid extends Component {
    constructor(props){
        super(props);
        

        //mothods bindings
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        //this.handleDrag = this.handleDrag.bind(this);
    }

    
    handleDelete(i) {
        let tags = this.props.tags;
        tags.splice(i, 1);
        this.props.setTags(tags);
    }

    handleAddition(tag) {
        let tags = this.props.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.props.setTags(tags);
    }

    // handleDrag(tag, currPos, newPos) {
    //     let tags = this.props.tags;

    //     // mutate array
    //     tags.splice(currPos, 1);
    //     tags.splice(newPos, 0, tag);

    //     // re-render
    //     this.setState({ tags: tags });
    // }
    render() {

        const newTeachinAidiUiSchema = {
            "tags": {
                "ui:widget": (props) => {
                    return (<ReactTags tags = {this.props.tags}
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
            required: ["title","subject"],
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
                tags: {
                    type: "string",
                    title: "Tags"
                },
                description : {
                    type : "string",
                    title : "Description"
                },
                files : {
                    type: "array",
                    title: "Share your teaching aid",
                    items: {
                      type: "string",
                      format: "data-url"
                    }
                },
                language : {
                    type : "string",
                    title : "Language",
                    enum : this.props.languages,
                    default : 'English',
                    uniqueItems : true
                },
                forGrades : {
                    type : "array",
                    title : "Suitable for grades",
                    items : {type : "string",
                            enum : this.props.forGrades,
                            default : this.props.forGrades[0],
                            uniqueItems : true}
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
                            onSubmit={this.props.onSubmit}
                            onError={this.props.onErrorSubmit}>
                        </Form>
                        <UnderConstruction/>
                    </div>
                </div>
            </div>
        );
    }

   
}
