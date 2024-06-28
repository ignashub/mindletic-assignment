<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\SurveyResponseController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/surveys', [SurveyController::class, 'create']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/surveys/{survey}/responses', [SurveyResponseController::class, 'store']);
    Route::get('/surveys/{survey}/results', [SurveyController::class, 'show']);
});
