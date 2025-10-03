import React from "react";
import { ArrowRight, CircleChevronRight } from "lucide-react";

const NavBar = () => {
    return (
        <>
            <div className="text-white md:px-5 py-5 flex justify-between items-center gap-5">
                {/* <h1 className="text-4xl bold"
                    style={{ fontWeight: 500 }}
                >ASUTOSH.</h1> */}
                <div className="nav-elems hidden md:flex justify-center items-center gap-10 text-xl uppercase tracking-wider font-semibold">
                    <span>Contact</span>
                    <span>About</span>
                    <span>Project</span>
                </div>
                <div className="btn flex justify-center items-center px-4 md:px-8 py-4 gap-3 border rounded-full tracking-widest uppercase font-semibold ">HIRE ME<ArrowRight /></div>
            </div>
        </>
    );
};

export default NavBar;
