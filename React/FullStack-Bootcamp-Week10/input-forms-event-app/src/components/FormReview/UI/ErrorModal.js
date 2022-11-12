import React from 'react';

import Button from './Button';
import classes from './ErrorModal.module.css';
const ErrorModal = (props) => {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>

            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>0kay</Button>
            </footer>
        </>
    );
};

export default ErrorModal;
