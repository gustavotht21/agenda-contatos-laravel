<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        dd("index");
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
    public function edit(string $id)
    {
        dd("edit");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd("update");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        dd("destroy");
    }
}
