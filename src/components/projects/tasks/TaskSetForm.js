import React from "react";

export default class TaskSetForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.taskSet ? props.taskSet.name : "",
            description: props.taskSet ? props.taskSet.description : "",
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
            name: this.state.name,
            description: this.state.description,
            taskList: []
        });
    }
    

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="name this list"
                        value={this.state.name}
                        onChange={this.onInputChange}
                        autoFocus
                    />
                    <input 
                        type="text"
                        name="description"
                        placeholder="add a list description"
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


