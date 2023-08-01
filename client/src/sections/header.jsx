import React,{useState} from "react";

const Header = () => {
    const [isMenuOpen, setMenuOpen]=  useState(false);

    const menuToggle = () =>{
        setMenuOpen(!isMenuOpen);
    }

    return(
        <>
            <div className="">
                <header className="flex p-2 pl-6 items-center gap-5">
                    <a href = "" className="flex items-center gap-2">
                        <svg width="64px" height="64px" viewBox="0 -10.43 47.856 47.856" xmlns="http://www.w3.org/2000/svg" fill="" stroke=""><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_4" data-name="4" transform="translate(-533.889 -162.466)"> 
                            <path id="Path_207" data-name="Path 207" d="M581.745,181.466s0-11.137-8.378-11.137c-5.709,0-30.838,3.292-30.838,3.292l-3.748-5.155h-4.892l5.5,13h11.558l-4.766,8h4.42l8.512-8Z" fill="#375467"></path> <path id="Path_208" data-name="Path 208" d="M563.587,169.2l-11.262-6.737H547.15l7.653,7.569Z" fill="#375467"></path> </g> </g>
                        </svg>
                        <span className="font-bold text-xl text-center">AirToGo</span>
                    </a>
                    <div className="hidden sm:block" >
                        <nav className="flex sm:justify-center space-x-3">
                            {[
                                ['Home', '/home'],
                                ['Flight', '/flight'],
                                ['Hotel', '/hotel'],
                                ['Promo', '/promo']
                            ].map(([title,url]) => {
                                return( <a href={url} key={url} className="rounded-lg px-3 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-semibold">{title}</a>)
                            })}
                        </nav>
                    </div>

                    <div className="ml-auto mr-5">
                    <svg width="40px" height="40px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#000000" strokeWidth="0.43200000000000005"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" fill="#375467"></circle> <path opacity="0.5" d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill="#375467" ></path> </g></svg>
                    </div>

                    <div className="sm:hidden ml-auto">
                        <button
                            className="flex items-center gap-2 text-xl"
                            onClick={menuToggle}
                        >
                            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#375467" strokeWidth="1.5" strokeLinecap="round"></path> <path opacity="0.5" d="M20 12L4 12" stroke="#375467" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 17L4 17" stroke="#375467" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        </button>
                    </div>
                </header>
                {isMenuOpen && (
                    <nav className="sm:hidden flex flex-col items-center space-y-4">
                    {[
                        ['Home', '/home'],
                        ['Flight', '/flight'],
                        ['Hotel', '/hotel'],
                        ['Promo', '/promo']
                    ].map(([title, url]) => {
                        return (
                        <a
                            href={url}
                            key={url}
                            className="text-center rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                            onClick={menuToggle}
                        >
                            {title}
                        </a>
                        );
                    })}
                    </nav>
                )}
            </div>
        </>
    )
}

export default Header;