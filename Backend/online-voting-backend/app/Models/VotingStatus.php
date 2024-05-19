<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VotingStatus extends Model
{
    use HasFactory;

    protected $table = 'voting_status';

    protected $fillable = [
        'voterName',
        'voterRegNo',
        'candidateName',
        'symbol'
    ];

}
