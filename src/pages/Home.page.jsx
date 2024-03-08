import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {
    return (
        <div name="home" className="w-full h-screen bg-gradient-to-b from-orange-500 to-orange-50">
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
                <div>
                    <p className="text-gray-700 py-4 max-w-[700px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </p>
                    <div>
                        <button className="text-blue-950 group border-2 border-blue-950 px-6 py-3 m-y2 flex items-center hover:border-orange-800 rounded-full">
                            View Work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight  className="ml-3" />
                            </span>
                        </button>
                    </div>
                </div>

            </div>


            
        </div>
    );
};

export default HomePage;