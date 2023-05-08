<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::get("contact/add", [ContactController::class, "create"])
    ->name("contact.create");

Route::post("contact/add", [ContactController::class, "store"])
    ->name("contact.store");

Route::get("contact/successAdd", [ContactController::class, "successStore"])
    ->name("contact.successStore");

Route::get("contact/view", [ContactController::class, "index"])
    ->name("contact.view");

Route::get("contact/edit/{contact}", [ContactController::class, "edit"])
    ->name("contact.edit");

Route::post("contact/edit/{contact}", [ContactController::class, "editStore"])
    ->name("contact.storeEdit");

Route::post("contact/delete/{contact}", [ContactController::class, "destroy"])
    ->name("contact.delete");
