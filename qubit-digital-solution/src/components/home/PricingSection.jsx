'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiZap, FiStar, FiGlobe } from 'react-icons/fi';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('gold');
  
  const plans = [
    {
      name: 'Bronze',
      price: 15000,
      features: [
        'Basic SEO Optimization',
        'Social Media (2 platforms)',
        'Monthly Analytics',
        '5 Keyword Research',
        'Email Support'
      ],
      missing: ['Website Development', 'Mobile App Support'],
      color: '#f18252',
      height: 460,
      icon: <FiZap />
    },
    {
      name: 'Gold',
      price: 25000,
      features: [
        'Advanced SEO Strategy',
        'Social Media (5 platforms)',
        'Weekly Analytics',
        '15 Keyword Research',
        'Content Marketing'
      ],
      missing: ['Custom Website Dev'],
      color: 'linear-gradient(135deg, #f1c252 0%, #d4a116 100%)',
      height: 500,
      icon: <FiStar />
    },
    {
      name: 'Diamond',
      price: 35000,
      features: [
        'Custom Website Development',
        'Mobile App Development',
        'Real-time Analytics',
        '30+ Keyword Research',
        '24/7 Priority Support'
      ],
      missing: [],
      color: '#b2b4bd',
      height: 540,
      icon: <FiGlobe />
    }
  ];

  const getCardStyle = (index) => {
    const selectedIndex = plans.findIndex(p => p.name.toLowerCase() === selectedPlan);
    const offset = index - selectedIndex;
    
    return {
      scale: offset === 0 ? 1.05 : 0.9,
      translateY: offset === 0 ? 0 : 20,
      filter: offset === 0 ? 'none' : 'blur(2px)',
      opacity: offset === 0 ? 1 : 0.95,
      zIndex: offset === 0 ? 20 : 10
    };
  };

  return (
    <div className="bg-[#040406] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold text-[#b2b4bd] mb-2">
            Digital Marketing Packages
          </h2>
          <p className="text-[#f18252]">Tailored solutions for your business growth</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 items-end relative min-h-[500px] md:min-h-[600px]">
          <AnimatePresence initial={false}>
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`absolute md:relative w-full rounded-lg p-4 shadow-xl backdrop-blur-md border border-white/10 overflow-hidden`}
                style={{
                  background: plan.color,
                  height: `${plan.height}px`,
                  transformOrigin: 'center bottom'
                }}
                initial={false}
                animate={getCardStyle(index)}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onHoverStart={() => setSelectedPlan(plan.name.toLowerCase())}
                onHoverEnd={() => setSelectedPlan('gold')}
              >
                <div className="absolute inset-0 bg-[#040406]/80" />
                
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4 text-white">
                      <span className="text-xl">{plan.icon}</span>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                    </div>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">
                        ₹{plan.price.toLocaleString()}
                      </span>
                      <span className="text-[#b2b4bd] text-sm">/month</span>
                    </div>

                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <FiCheck className="text-green-400 shrink-0 mt-1" />
                          <span className="text-[#b2b4bd] text-sm">{feature}</span>
                        </div>
                      ))}

                      {plan.missing.length > 0 && (
                        <div className="pt-3 border-t border-white/10">
                          <div className="text-[#f18252] text-xs font-bold mb-2">
                            Not Included:
                          </div>
                          {plan.missing.map((miss, i) => (
                            <div key={i} className="flex items-start gap-2 opacity-75">
                              <FiX className="text-red-400 shrink-0 mt-1" />
                              <span className="text-[#b2b4bd] text-xs">{miss}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 mt-4 text-sm rounded-md font-medium ${
                      plan.name.toLowerCase() === selectedPlan 
                        ? 'bg-[#f18252] text-white' 
                        : 'bg-white/10 text-[#b2b4bd]'
                    }`}
                  >
                    Choose {plan.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;