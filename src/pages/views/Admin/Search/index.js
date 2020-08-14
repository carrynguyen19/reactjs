import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Router, Link, NavLink } from 'react-router-dom'
import ReactDOM from "react-dom";
import axios from "axios";


const SearchProduct = ({ products }) => {
    const [keyword, setKey] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setKey({ ...keyword, [name]: value })

    }
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios
            .get(" http://localhost:8080/products")
            .then(res => {
                setCountries(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        setFilteredCountries(
            countries.filter(country =>
                country.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, countries]);

    if (loading) {
        return <p>Loading countries...</p>;
    }
    return (

        <div>
            <input
                label="Search Country" icon="search"
                placeholder="Search Countries"
                onChange={e => setSearch(e.target.value)}
            />
            <div className="row text-center">
                {filteredCountries.map((item, index) => (
                    <div className="col-lg-3 col-md-6 mb-4">

                        <div className="card h-100">
                            <img className="card-img-top" src={item.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.price}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/product/${item.id}`} className="btn btn-info" >Detail</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

SearchProduct.propTypes = {
    products: PropTypes.array
}

export default SearchProduct
