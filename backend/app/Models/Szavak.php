<?php

namespace App\Models;

use App\Models\Tema;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szavak extends Model
{
    use HasFactory;
    protected $primaryKey='id';
    protected $fillable = [
        'angol',
        'magyar',
        'temaID',
    ];

    public function tema(){
        return $this->belongsTo(Tema::class,'temaID','id');
    }
}
