<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyResultController extends Controller
{
    public function show(Survey $survey)
    {
        $responses = $survey->responses;

        // Aggregate responses here as needed

        return response()->json($responses);
    }
}
