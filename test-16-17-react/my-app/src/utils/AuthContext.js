import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const authContext = createContext({});
function AuthProvider(props) {

    const [auth, setAuth] = useState({
        token: JSON.parse(window.localStorage.getItem('token')),
        data: JSON.parse(window.localStorage.getItem('data')),
    });

    const verifyToken = async () => {
        let status;
        const config = {
            headers: {
                Authorization: "Bearer " + auth.token,
            }
        }
        await axios.post('/api/random', {}, config)
            .then(res => {
                status = res.status;
            })
            .catch(err => {
                status = err.response.data.status;
            });
        return status;
    }

    useEffect(() => {
        setAuth({
            token: JSON.parse(window.localStorage.getItem('token')),
            data: JSON.parse(window.localStorage.getItem('data')),
        })
    }, []);

    useEffect(async () => {
        try {
            window.localStorage.setItem('token', JSON.stringify(auth.token));
            window.localStorage.setItem('data', JSON.stringify(auth.data));
            if (await verifyToken() !== 200) {
                setAuth({
                    data: null,
                    token: null,
                });
            }
        } catch (error) {
            console.log(error)
        }
    }, [auth.token, auth.data]);

    const setAuthData = (data, token) => {
        setAuth({
            data: data,
            token: token,
        });
    };
    return (
        <authContext.Provider value={{ auth, setAuthData }}>
            {props.children}
        </authContext.Provider>
    );
}

export default AuthProvider;