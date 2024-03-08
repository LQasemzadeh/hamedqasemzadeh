import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialsComponent = () => {
    return (
        <div className="hidden lg:block flex fixed flex-col top-[35%] left-0">
            <ul>
                {/* Start LinkedIn */}
                <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-blue-600">
                    <a
                    href="/"
                    className="flex justify-between pl-5 items-center w-full text-white"
                    >
                        Linkedin
                        <FaLinkedin size={30} />
                    </a>
                </li>

                {/* Start Github */}
                <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a
                        href="/"
                        className="flex justify-between pl-5 items-center w-full text-white"
                    >
                        Github
                        <FaGithub size={30} />
                    </a>
                </li>

                {/* Start Instagram */}
                <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#E4405F]">
                    <a
                        href="/"
                        className="flex justify-between pl-5 items-center w-full text-white"
                    >
                        Instagram
                        <FaInstagram size={30} />
                    </a>
                </li>

                {/* Start Email */}
                <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#0F9D58]">
                    <a
                        href="/"
                        className="flex justify-between pl-5 items-center w-full text-white"
                    >
                        Email
                        <HiOutlineMail size={30} />
                    </a>
                </li>

                {/* Start CV */}
                <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#E79D30]">
                    <a
                        href="/"
                        className="flex justify-between pl-5 items-center w-full text-white"
                    >
                        Resume
                        <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
            
        </div>
    );
};

export default SocialsComponent;