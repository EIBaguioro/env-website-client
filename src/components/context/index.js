import React, { useState, useContext } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (email === "" || password === "")
        return setError({
          message: "Please provide both the email and password",
        });

      await axios
        .post("http://localhost:8000/api/auth/login", { email, password })
        .then(({ data: { access_token, user} }) => {
          localStorage.setItem('accessToken', access_token);
          setUser(user);
          router.push('/');
        })
        .catch((error) => {
          const { response } = error;
          setError(response.data);
        });
      setEmail("");
      setPassword("");
    };

    return <AppContext.Provider value={{error,  email, setEmail, password, setPassword, handleSubmit, user}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider }