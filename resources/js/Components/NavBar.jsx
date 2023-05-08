import {Link} from "@inertiajs/inertia-react";
import {useState} from "react";
import React from "react";

let opts = [
    ["Home", "home"],
    ["Adicionar contato", "contact.create"],
    ["Ver contatos", "contact.view"]]

let linksOpts = {
    "home": "Home",
    "contact.create": "Adicionar contato",
    "Ver contatos": "contact.view",
}

export default function NavBar() {
    let page = route().current();
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return <nav
        className="bg-zinc-800 px-2 sm:px-4 py-2.5 w-full z-2 top-0 left-0 border-b border-gray-900 ">
        <div className=" container flex items-center justify-between items-align-center mx-auto">

            <div className="items-center justify-between w-full lg:flex hidden">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-zinc-800 sm:flex-row sm:space-x-8 sm:mt-0 md:text-sm sm:font-medium sm:border-0 sm:bg-zinc-800">

                    {
                        opts.map(opt => (
                            <li>
                                <Link href={route(opt[1])}
                                      className={
                                          linksOpts[page] === opt[0]
                                              ? "block py-2 pl-3 pr-4 text-lg text-white font-bold bg-zinc-800 rounded sm:bg-transparent sm:text-yellow-300 sm:p-0 text-white"
                                              : "block py-2 pl-3 pr-4 text-lg text-white font-bold rounded hover:bg-transparent sm:hover:bg-transparent sm:hover:text-amber-300 sm:p-0 sm:hover:text-yellow-300"}
                                      aria-current="page">{opt[0]}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="hidden lg:flex w-72 lg:items-center lg:order-last ml-9 ">
                <div className="relative inline-flex">
                    {/*<Link href={route('profile.edit')}>*/}
                    {/*    <div className="font-bold flex space-x-[5px]">*/}
                    {/*        <div className="font-lg text-white">*/}
                    {/*            <div className="inline-flex flex ">*/}
                    {/*                {user.user.name}*/}
                    {/*                <msvg aria-hidden="true" className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>*/}
                    {/*                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>*/}
                    {/*                </msvg>*/}
                    {/*            </div>*/}
                    {/*            <div className=" text-sm text-gray-500 text-gray-400">{user.user.profile}</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}

                    {/*<Link href={route("logout")} method="post" as="button" type="button" className=" ml-2 justify-between text-white flex items-center md:ml-6 sm:justify-items-end">*/}
                    {/*    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <path clipRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" fill-rule="evenodd"></path>*/}
                    {/*        <path clipRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" fill-rule="evenodd"></path>*/}
                    {/*    </svg>*/}
                    {/*</Link>*/}
                </div>
            </div>

            <div className="flex w-full pr-4 pl-4 justify-between lg:hidden">

                <button
                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                    className="items-center justify-center p-2 rounded-md text-gray-400
                                hover:text-gray-500 hover:bg-transparent focus:outline-none focus:bg-transparent
                                focus:text-gray-500 transition duration-150 ease-in-out"
                >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path
                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="order-last py-[25] inline-flex">
                    {/*<Link href={route('profile.edit')}>*/}
                    {/*    <div className="font-bold flex space-x-[5px]">*/}
                    {/*        <div className="font-lg text-white">*/}
                    {/*            <div className="inline-flex flex ">*/}
                    {/*                {user.user.name}*/}
                    {/*                <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>*/}
                    {/*                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*            <div className=" text-sm text-gray-500 text-gray-400">{user.user.profile}</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}

                    {/*<Link href={route("logout")} method="post" as="button" type="button" className=" ml-4 justify-between text-white flex items-center md:ml-6 sm:justify-items-end">*/}
                    {/*    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <path clipRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" fill-rule="evenodd"></path>*/}
                    {/*        <path clipRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" fill-rule="evenodd"></path>*/}
                    {/*    </svg>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' lg:hidden '}>
            <div className="pt-2 pb-3 space-y-1">
                {
                    opts.map(opt => (
                        <Link href={route(opt[1])}
                              className={
                                  linksOpts[page] === opt[0]
                                      ? "block py-2 pl-3 pr-4 text-lg text-white font-bold bg-zinc-800 hover:bg-zinc-500 rounded bg-transparent "
                                      : "block py-2 pl-3 pr-4 text-lg text-white font-bold rounded hover:bg-zinc-500 md:hover:bg-zinc-500 transition ease-in-out duration-300"}
                              aria-current="page">{opt[0]}</Link>
                    ))
                }

            </div>


        </div>
    </nav>

}

