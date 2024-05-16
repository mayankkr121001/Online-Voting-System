<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Voter extends Model
{
    use Notifiable;
    use HasApiTokens, HasFactory;

    protected $table = 'voters';

    protected $fillable = [
        'name',
        'regNo',
        'semester',
        'password',
        'image'
    ];

    
}
