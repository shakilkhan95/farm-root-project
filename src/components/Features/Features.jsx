import React from 'react'
import { FaCheckCircle, FaHandsHelping, FaLeaf, FaShippingFast } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl mb-3" size={45} />,
    title: "100% Organic",
    desc: "All our produce is grown without harmful chemicals or pesticides.",
  },
  {
    icon: <FaShippingFast className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Fast Delivery",
    desc: "We deliver fresh produce at your doorstep within hours of harvesting.",
  },
  {
    icon: <FaHandsHelping className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Farmer Support",
    desc: "Empowering local farmers with fair trade and sustainable practices.",
  },
  {
    icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Quality Assured",
    desc: "Every item is checked for freshness and quality before delivery.",
  },
];

const Features = () => {
  return (
    <section>
        <h2>Why Choose Us</h2>
        <div>
            {
                features.map((feature , index) => 
                <div key={index}>
                    <div>{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                </div>)
            }
        </div>
    </section>
  )
}

export default Features