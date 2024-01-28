import "./App.css";
import submit from "./submit";

function App() {
    return (
        <>
            <nav className="navbar border-bottom border-body">
                <div className="container-fluid">
                    <a className="navbar-logo" href="#">
                        <img src="../src/assets/logo.png" alt="Home" className="logo"/>
                    </a>
                </div>
            </nav>
            <div className="container">
                <div className="row justify-content-center d-flex">
                    <div className="col-4 border rounded border-primary-subtle">
                        <div className="mb-3 mt-4">
                            <label
                                htmlFor="username"
                                className="form-label text-primary"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="form-label text-primary"
                            >
                                Roll Number
                            </label>
                            <input
                                // type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={submit()}
                                id="login-button"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
