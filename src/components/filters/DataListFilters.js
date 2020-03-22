import React from "react";
import {connect} from "react-redux";
import {setTextFilter} from "../../actions/filters";

class DataListFilters extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(DataListFilters)

