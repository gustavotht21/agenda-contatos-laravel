import React from "react";
import {usePage} from "@inertiajs/inertia-react";
import TableContacts from "../Components/TableContacts";

export default function ViewContact() {

    const {contacts} = usePage().props

    return (
        <>
            <TableContacts contacts={contacts} />
        </>
    )
}
