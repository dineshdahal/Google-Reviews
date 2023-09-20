<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{

protected $guarded=[];
protected $hidden=['created_at', 'updated_at'];

use HasFactory;

    protected function description():Attribute{
        return Attribute::make(
            get: fn(String $value)=>strlen($value)>100?substr($value,0,100)."...": $value,
            set:fn(String $value)=>rtrim($value)
        );
    }

}
