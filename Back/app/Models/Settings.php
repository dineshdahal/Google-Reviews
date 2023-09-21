<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $hidden = ['id', 'created_at', 'updated_at'];
    protected $guarded = [];

    use HasFactory;
}