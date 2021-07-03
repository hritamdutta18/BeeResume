import React, { Component } from 'react';

import axios from 'axios';
import { saveAs } from 'file-saver';

class Extras extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    formSubmit = (e) => {
        e.preventDefault();
        this.props.submitted();
        this.props.nextStep();
        // const data = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     linkedin: this.state.linkedin,
        //     github: this.state.github,
        //     skills: this.state.skills,
        //     exp1_org: this.state.exp1_org,
        //     exp1_pos: this.state.exp1_pos,
        //     exp1_desc: this.state.exp1_desc,

        //     exp2_org: this.state.exp1_org,
        //     exp2_pos: this.state.exp1_pos,
        //     exp2_desc: this.state.exp1_desc
        // }
        const data = this.props.values;


        axios.post('/create-pdf', data)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h2 className="card-title">Extra-Curriculars/Activities</h2>
                    <hr />
                </div>
                <form onSubmit={this.formSubmit}>
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_1" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_1} onChange={handleChange} required />
                            <label htmlFor="extra_1"><i className="fas fa-language mr-1" style= {{color: "gray"}}></i>Languages</label>
                        </div>
                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_2" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_2} onChange={handleChange} required />
                            <label htmlFor="extra_2"><i className="fas fa-futbol mr-1" style= {{color: "black"}}></i>Hobbies</label>
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_3" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_3} onChange={handleChange} required />
                            <label htmlFor="extra_3"><i className="fas fa-medal mr-1" style= {{color: "#D4AF37"}}></i>Activity/Achievement</label>
                        </div>
                        <br/>
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_4" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_4} onChange={handleChange} required />
                            <label htmlFor="extra_4"><i className="fas fa-medal mr-1" style= {{color: "#D4AF37"}}></i>Activity/Achievement</label>
                        </div>
                    </div>

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_5" id="extra_5" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_5} onChange={handleChange} required/>
                            <label htmlFor="extra_5"><i className="fas fa-medal mr-1" style= {{color: "#D4AF37"}}></i>Activity/Achievement</label>
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-warning">Download PDF<i className="fas fa-download ml-1"></i></button>
                    </div>
                    <br />
                </form>
            </div>

        )
    }
}

export default Extras;
