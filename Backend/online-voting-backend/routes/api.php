<?php

use App\Http\Controllers\Api\CandidateController;
use App\Http\Controllers\Api\VoterController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LoggedInUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('voters', [VoterController::class, 'index']);
Route::post('voters', [VoterController::class, 'store']);
Route::delete('voters/{id}/delete', [VoterController::class, 'destroy']);

Route::get('candidates', [CandidateController::class, 'index']);
Route::post('candidates', [CandidateController::class, 'store']);

Route::delete('candidates/{id}/delete', [CandidateController::class, 'destroy']);


Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);


Route::post('adminLogin', [AuthController::class, 'adminLogin']);
Route::post('adminLogout', [AuthController::class, 'adminLogout']);



// Route::group(['middleware' => 'api', 'prefix'=>'auth'],function($router){
//     Route::post('login', [AuthController::class, 'login']);
    // Route::post('logout', [AuthController::class, 'logout']);
    // Route::post('refresh', [AuthController::class, 'refresh']);
    // Route::post('me', [AuthController::class, 'me']);
// });



