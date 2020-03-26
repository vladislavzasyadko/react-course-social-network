import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({
                editMode: !this.state.editMode
            })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.toggleEditMode}>
                        <span>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.toggleEditMode} type="text" value={this.props.status} />
                        <button onClick={this.props.saveStatus}>Save</button>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus