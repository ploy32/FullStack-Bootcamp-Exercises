import React, { useState, useEffect } from 'react';

const FavoriteColor = (props) => {
    const [favColor, setFavColor] = useState('Black');
    useEffect(() => {
        setTimeout(() => {
            setFavColor('White');
        }, 1000);
    }, [favColor]);
    return (
        <div>
            <h1>My favorite color is: {favColor}</h1>
        </div>
    );
};

export default FavoriteColor;
