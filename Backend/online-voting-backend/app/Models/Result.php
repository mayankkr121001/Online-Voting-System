<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    protected $table = 'result';

    protected $fillable = [
        'candidateName',
        'regNo',
        'semester',
        'symbol',
        'votes'
    ];
    public static $rules = [
        'regNo' => 'unique:candidates', // Ensure 'name' is unique in the 'candidates' table
        // Other rules...
    ];
}
