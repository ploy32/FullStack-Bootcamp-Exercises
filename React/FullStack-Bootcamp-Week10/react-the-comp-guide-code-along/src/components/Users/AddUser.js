import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)',
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    };
    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        onChange={userAgeChangeHandler}
                        value={enteredUserAge}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
