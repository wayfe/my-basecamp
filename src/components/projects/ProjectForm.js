import React from "react";

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.project ? props.project.title : "",
            description: props.project ? props.project.description : "",
        }
    }


    onInputChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        this.setState(() => ({[property] : value}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            title: this.state.title,
            description: this.state.description
        });
    }
    

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Project Name"
                        value={this.state.title}
                        onChange={this.onInputChange}
                        autoFocus
                    />
                    <input 
                        type="text"
                        name="description"
                        placeholder="Project Description"
                        value={this.state.description}
                        onChange={this.onInputChange}
                        autoFocus
                    />
                    <div>
                        <button className="btn-big">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}


