<?php

use App\Http\Controllers\Api\CandidateController;
use App\Http\Controllers\Api\VoterController;
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



