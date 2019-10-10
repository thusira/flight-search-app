import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export class SearchWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            travelDate: new Date(),
            returnDate: new Date()
        };
        this.handleChangeTravel = this.handleChangeTravel.bind(this);
        this.handleChangeReturn = this.handleChangeReturn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        alert(JSON.stringify(this.state));
    }

    render() {
        return (

            <div className="container card card-body bg-light text-left">
                <h3>Flight Search</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="oneway" checked="checked" />One way</label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="return" />Return</label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-lg-3 col-md-3 col-sm-12">
                                    <label htmlFor="from">From:</label>
                                    <select className="form-control" id="from" onChange={(e) => this.setState({ from: e.target.value })}>
                                        <option value=''></option>
                                        <option>YYR</option>
                                        <option>YYZ</option>
                                        <option>DXB</option>
                                        <option>CMB</option>
                                        <option>JFK</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3 col-lg-3 col-sm-12">
                                    <label htmlFor="to">To:</label>
                                    <select className="form-control" id="to" onChange={(e) => this.setState({ to: e.target.value })}>
                                        <option value=''></option>
                                        <option>YYR</option>
                                        <option>YYZ</option>
                                        <option>DXB</option>
                                        <option>CMB</option>
                                        <option>JFK</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2 col-lg-2 col-sm-12">
                                    <label htmlFor="to">Date:</label>
                                    <div>
                                        <DatePicker
                                            selected={this.state.travelDate}
                                            className="form-control"
                                            onChange={this.handleChangeTravel}
                                            name="travelDate"
                                            dateFormat="MM/dd/yyyy"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-2 col-lg-2 col-sm-12">
                                    <label htmlFor="to">Return Date:</label>
                                    <div>
                                        <DatePicker
                                            className="form-control"
                                            selected={this.state.travelDate}
                                            onChange={this.handleChangeReturn}
                                            name="returnDate"
                                            dateFormat="MM/dd/yyyy"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-2 col-lg-2 col-sm-12">
                                    <label htmlFor="button">&nbsp;</label>
                                    <button type="submit" className="btn btn-primary w-100">
                                        <i className="fa fa-search" aria-hidden="true"></i></button>
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