import React, { useContext } from 'react';
import { authContext } from '../Utils/AuthContext';
import { Button } from "react-bootstrap";
function Dashboard(props) {
    const { setAuthData } = useContext(authContext);
    const handleLogout = () => {
        setAuthData(null);
        props.history.push('/login');
    }

    return (
        <div
            style={{ height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
        >
            <div style={{ width: 300 }}>
                <h1 className="text-center"> Dashboard </h1>
                <Button
                    variant="primary"
                    type="button"
                    className="w-100 mt-3"
                    onClick={handleLogout}
                >
                    Log out
                </Button>
            </div>
        </div>
    );
}

export default Dashboard;