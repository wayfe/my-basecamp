import React from "react";
import uuid from "uuid";

export default class TaskItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.task ? props.task.description : "",
            details: props.task ? props.task.details : "",
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
            description: this.state.description,
            details: this.state.details,
            id: uuid(),
            completed: false
        });
    }
    

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="description"
                        placeholder="describe this task"
                        value={this.state.description}
                        onChange={this.onInputChange}
                        autoFocus
                    />
                    <input 
                        type="text"
                        name="details"
                        placeholder="add some details"
                        value={this.state.details}
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


