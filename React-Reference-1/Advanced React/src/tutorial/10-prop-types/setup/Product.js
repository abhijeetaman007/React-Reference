import React from 'react';
import propTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

// Since we are calling an api there can be some feilds missing in the returned data
// which might lead to big fat error
//To avoid that we will use prop Types

const Product = ({ image, name, price }) => {
    const url = image && image.url; // if image is there get me url
    return (
        <article className="product">
            <img src={url || defaultImage} alt={name} />
            <h4>{name || 'default name'}</h4>
            <p>${price || 3.99}</p>
        </article>
    );
};

// //Default props
// //We can show default props if something missing in api and not show error
// Product.defaultProps={
//   name:'default name',
//   price:3.99,
//   image:defaultImage  //Since image is object so in this we are not have url feild so we will use short circuit
// }

//This is why we even use Typescript

//Checking ---> this will and check and show error if something missing
Product.propTypes = {
    image: propTypes.object.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
};
//rfcp is prop type testing component

export default Product;
