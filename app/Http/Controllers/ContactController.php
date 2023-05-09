<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::all()->where("users_id", '=', Auth::user()->id);
        return Inertia::render("ViewContact", ["contacts" => $contacts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $countries = Country::all();
        return Inertia::render("RegisterContact", ["countries" => $countries]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => "required",
            'email' => "required|unique:contacts",
            'sex' => "required",
            'birth' => "required",
            'phone' => "required",
            'country' => "required",
        ]);

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->sex = $request->sex;
        $contact->birth = $request->birth;
        $contact->phone = $request->phone;
        $contact->country = $request->country;
        $contact->save();

        return redirect()->route("contact.successStore");
    }

    public function successStore()
    {
        return Inertia::render("SuccessAddContact");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd("show");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        $countries = Country::all();
        return Inertia::render("EditContact", ["contact" => $contact, "countries" => $countries]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        if ($request->email === $contact->email) {
            $request->validate([
                'name' => "required",
                'email' => "required",
                'sex' => "required",
                'birth' => "required",
                'phone' => "required",
                'country' => "required",
            ]);
        } else {
            $request->validate([
                'name' => "required",
                'email' => "required|unique:contacts",
                'sex' => "required",
                'birth' => "required",
                'phone' => "required",
                'country' => "required",
            ]);
        }

        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->sex = $request->sex;
        $contact->birth = $request->birth;
        $contact->phone = $request->phone;
        $contact->country = $request->country;
        $contact->save();

        return redirect()->route("contact.successUpdate");
    }

    public function successEdit()
    {
        return Inertia::render("SuccessEditContact");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route("contact.view");
    }
}
