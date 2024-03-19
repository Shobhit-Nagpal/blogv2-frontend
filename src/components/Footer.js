import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className="w-full bg-black flex flex-col-reverse justify-between items-center gap-10 p-5 mt-8 lg:flex-row">
        <div>
        <p className="text-grey lg:ml-52">Copyright &#169; 2024</p>
        </div>
        <div className="flex gap-5 justify-between items-center lg:mr-52">
        <a className="text-grey hover:text-white text-2xl" href="https://github.com/Shobhit-Nagpal" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a className="text-grey hover:text-white text-2xl" href="https://x.com/shbhtngpl" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a className="text-grey hover:text-white text-2xl" href="https://linkedin.com/in/shobhitnagpal" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        </div>
    )
}

export default Footer;
