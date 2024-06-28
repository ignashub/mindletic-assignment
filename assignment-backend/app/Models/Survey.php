<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Survey extends Model
{
    use HasFactory;

    // Allow mass assignment for these fields
    protected $fillable = ['title', 'questions'];

    // Cast the questions attribute to an array
    protected $casts = [
        'questions' => 'array',
    ];

    public function responses(): HasMany
    {
        return $this->hasMany(SurveyResponse::class);
    }
}
