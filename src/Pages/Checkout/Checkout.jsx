import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service=useLoaderData();
    console.log('service', service);
    const { title, price}=service;
    // console.log(service);

    return (
        <div>
            <h2>Service Name: {title} {price}</h2>
        </div>
    );
};

export default Checkout;