import React from "react";
import {Head, Link, useForm, usePage} from "@inertiajs/inertia-react";
import NavBar from "../Components/NavBar";

export default function home() {

    const props = usePage().props
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        sex: '',
        birth: '',
        phone: '',
        country: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault()
        post(route("manager.store"));
    };

    return (
        <>
            <NavBar />
        </>
    )
}
