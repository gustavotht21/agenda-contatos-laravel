import { Head } from '@inertiajs/react';
import NotAuthenticated from "@/Layouts/NotAuthenticatedLayout";
import computer from "/public/computer.jpg"
import computer2 from "/public/computer2.jpg"
import {Link} from "@inertiajs/inertia-react";

export default function Welcome() {
    return (
        <>
            <NotAuthenticated
            >
                <Head title="ProContact" />

            <div className={"w-screen bg-black flex flex-col items-center justify-between"}>
                <div className={"flex flex-col items-center"}>
                    <h2 className={"text-3xl text-zinc-50 font-bold mt-6"}>ProContact</h2>
                    <p className={"text-lg text-zinc-50 font-medium mt-4"}>Mais rápido. Mais eficiente.</p>
                </div>

                <img className={"w-3/12 rounded-lg my-8"} src={computer2} alt="Computer above a table"/>
            </div>


            <div className={"w-screen flex justify-around items-center pt-8"}>
                <div className={"w-3/12"}>
                    <p className={"text-lg text-zinc-900 font-medium mt-4 break-word text-justify"}>O sistema de cadastro de contatos mais revolucionário já criado. Com uma interface simples, porém sofisticada e elegante, o ProContact engloba o que há de melhor em um sistema.</p>
                    <div className={"mt-2 flex gap-x-6"}>
                        <Link className={"text-indigo-500 underline"} href={route("register")}>> Tentar agora</Link>
                        <Link className={"text-indigo-500 underline"} href={route("login")}>> Log in</Link>
                    </div>
                </div>
                <div className={"w-3/12"}>
                    <img className={"w-full rounded-lg"} src={computer} alt="Computer above a table"/>
                </div>
            </div>


            <footer className={"absolute w-screen bottom-0 text-zinc-600 bg-zinc-300 flex py-4 justify-center"}>
                Gustavo Borges © Todos os direitos reservados
            </footer>
            </NotAuthenticated>
        </>
    );
}
