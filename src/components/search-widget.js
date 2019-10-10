import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export class SearchWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            travelDate: moment(),
            returnDate:moment()
        };
        this.handleChangeTravel = this.handleChangeTravel.bind(this);
        this.handleChangeReturn = this.handleChangeReturn.bind(this);
    }

    handleChangeTravel(date) {
        this.setState({
            travelDate: date
        })
    }
    
    handleChangeReturn(date) {
        this.setState({
            returnDate: date
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Submit data");
    }

    render() {
        return (

            <div class="container card card-body bg-light text-left">
                <h3>Flight Search</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="oneway" checked="checked"/>One way</label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="return" />Return</label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-row">
                                <div class="form-group col-lg-3 col-md-3 col-sm-12">
                                    <label for="from">From:</label>
                                    <select class="form-control" id="from">
                                        <option>YYR</option>
                                        <option>YYZ</option>
                                        <option>DXB</option>
                                        <option>CMB</option>
                                        <option>JFK</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3 col-lg-3 col-sm-12">
                                    <label for="to">To:</label>
                                    <select class="form-control" id="to">
                                        <option>YYR</option>
                                        <option>YYZ</option>
                                        <option>DXB</option>
                                        <option>CMB</option>
                                        <option>JFK</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2 col-lg-2 col-sm-12">
                                    <label for="to">Date:</label>
                                    <p>
                                        <DatePicker
                                            className="form-control"
                                            onChange={this.handleChangeTravel}
                                            name="travelDate"
                                            dateFormat="MM/DD/YYYY"
                                        />
                                    </p>
                                </div>
                                <div class="form-group col-md-2 col-lg-2 col-sm-12">
                                    <label for="to">Return Date:</label>
                                    <div>
                                        <DatePicker
                                            className="form-control"
                                            onChange={this.handleChangeReturn}
                                            name="returnDate"
                                            dateFormat="MM/DD/YYYY"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2 col-lg-2 col-sm-12 text-center justify-content-center align-self-center">
                                    <button type="submit" class="btn btn-primary w-100">
                                        <i class="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchWidget;