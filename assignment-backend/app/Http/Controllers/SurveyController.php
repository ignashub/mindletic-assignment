<?php


namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'questions' => 'required|array',
        ]);

        $survey = Survey::create([
            'title' => $request->title,
            'questions' => json_encode($request->questions),
        ]);

        return response()->json($survey, 201);
    }

    public function show(Survey $survey)
    {
        $responses = $survey->responses;

        // Aggregate responses here as needed

        return response()->json($responses);
    }
}
