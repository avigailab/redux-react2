import React, {Component} from 'react'
class List extends Component {

    generateHeaders() {
        let data = window.store.getState();
        // generate our header (th) cell components
        return data['conf'].map(function(colData) {
            return <th key={colData.title}> {colData.title} </th>;
        });
    };

    generateRows() {
        let data = window.store.getState();
        return data['jsonData'].map(function(item) {
            // handle the column data within each row
            let cells = data['conf'].map(function(colData) {
                return <td> {item[colData.field]}</td>;
            });

            return <tr key={item.id}>{cells}</tr>;
        });
    };

    /*functionStateToProps(state) {
        return
    }*/

    render() {
        let headerComponents = this.generateHeaders(),
        rowComponents = this.generateRows();
    return (
        <div>
            <h2>Redux - Data</h2>
            <button>Add +</button>
            <div className="table-responsive">          
                <table className="table">
                    <thead> {headerComponents} </thead>
                    <tbody> {rowComponents} </tbody>
                </table>
            </div>
        </div>
    );
    }
}

export default List
