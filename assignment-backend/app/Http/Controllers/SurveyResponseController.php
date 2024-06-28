<?php


namespace App\Http\Controllers;

use App\Models\Survey;
use App\Models\SurveyResponse;
use Illuminate\Http\Request;

class SurveyResponseController extends Controller
{
    public function store(Request $request, Survey $survey)
    {
        $request->validate([
            'responses' => 'required|array',
        ]);

        $response = SurveyResponse::create([
            'survey_id' => $survey->id,
            'responses' => json_encode($request->responses),
        ]);

        return response()->json($response, 201);
    }
}
