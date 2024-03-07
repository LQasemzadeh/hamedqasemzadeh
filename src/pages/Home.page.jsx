import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-orange-500">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-gray-800">
                    Hi, My Name is
                </p>
                <h1 className="text-4xl sm:text-4xl font-bold text-blue-950">
                    Hamde Qasemzadeh
                </h1>
                    <div className="text-gray-800 font-bold">
                        <TypeAnimation
                            sequence={[
                                'I am FullStack Developer',
                                1000,
                                'I am Backend Developer',
                                1000,
                                'I am Laravel Programmer',
                                1000,
                                'I am React Programmer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>


            </div>
            
        </div>
    );
};

export default HomePage;