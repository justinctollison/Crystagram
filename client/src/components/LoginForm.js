import React, { useState } from 'react';

function LoginForm(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])


    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => {
                    setErrors(err.errors)});
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormField>
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}    
                />
            </FormField>
            <FormField>
                <Input
                    type="text"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormField>
            <FormField>
                <button variant="fill" color="primary" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </FormField>
            <FormField>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </FormField>
        </form>
    );
}

export default LoginForm;