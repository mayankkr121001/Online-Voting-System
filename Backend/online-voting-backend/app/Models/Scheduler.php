<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scheduler extends Model
{
    use HasFactory;
    protected $table = 'scheduler';

    protected $fillable = [
        'position',
        'date',
        'startTime',
        'endTime'
    ];
}
