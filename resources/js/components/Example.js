import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        filter: "",
        data: [
            {
                fname: "Jayne",
                lname: "Washington",
                email: "jaynewashington@exposa.com",
                gender: "female"
            },
            {
                fname: "Peterson",
                lname: "Dalton",
                email: "petersondalton@exposa.com",
                gender: "male"
            },
            {
                fname: "Velazquez",
                lname: "Calderon",
                email: "velazquezcalderon@exposa.com",
                gender: "male"
            },
            {
                fname: "Norman",
                lname: "Reed",
                email: "normanreed@exposa.com",
                gender: "male"
            }
        ]
    };

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        return (
            <div>
                <input value={filter} onChange={this.handleChange} />
                {filteredData.map(item => (
                    <div key={item.email}>
                        <div>
                            {item.fname} {item.lname} - {item.gender} - {item.email}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

// export default class Example extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">Example Component</div>
//
//                             <div className="card-body">I'm an example component!</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
