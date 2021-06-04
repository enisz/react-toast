import { useState } from 'react';
import useToastContext from '../hooks/useToastContext';
import './Home.css';

export default function Home() {
    const addToast = useToastContext();
    const [form, setForm] = useState({
        type: "primary",
        title: "",
        message: ""
    })

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        const formCopy = {...form};
        formCopy[name] = value;
        setForm(formCopy);
    }

    const handleSubmit = event => {
        event.preventDefault();

        addToast(form);
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center home-container">
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h1>Toasts</h1>
                        <form onSubmit={event => handleSubmit(event) }>
                            <div className="mb-3">
                                <label htmlFor="toast-type" className="form-label">Type</label>
                                <select className="form-select" name="type" onChange={event => handleChange(event)} defaultValue={form.type} >
                                    <option>primary</option>
                                    <option>secondary</option>
                                    <option>success</option>
                                    <option>danger</option>
                                    <option>warning</option>
                                    <option>info</option>
                                    <option>light</option>
                                    <option>dark</option>
                                </select>
                                <div id="toast-type-help" className="form-text">Type of the toast</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="toast-title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="toast-title" name="title" onChange={event => handleChange(event)} value={form.title} />
                                <div id="toast-title-help" className="form-text">The title of the toast</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="toast-message" className="form-label">Message</label>
                                <input type="text" className="form-control" id="toast-message" name="message" onChange={event => handleChange(event)} value={form.message} />
                                <div id="toast-message-help" className="form-text">The message to show in the toast</div>
                            </div>

                            <button type="submit" className="btn btn-success">Show Toast!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}