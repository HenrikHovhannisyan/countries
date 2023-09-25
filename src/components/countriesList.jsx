import React, {memo, useEffect, useState} from "react";
import {API} from "../../src/config/api";

const CountriesList = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);



    useEffect(() => {

        fetch(
            API
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }, []);
};

export default memo(CountriesList);
