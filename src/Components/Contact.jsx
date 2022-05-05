import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col12 text-center py my-4">
                        <h1>Have some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assets/Contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                        <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Name
                                </label>
                                <input type="email" className="form-control" id="Name" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">
                                    Example textarea
                                </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type='submit' className="btn btn-outline-primary">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
