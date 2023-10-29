import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    return (
        <div className="pt-4 bg-base-200">
            <div className="text-center max-w-2xl mx-auto space-y-5">
                <h3 className="text-xl font-bold text-orange-600">Services</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;