<?php

namespace App\Http\Controllers;

use App\Models\Tema;
use Illuminate\Http\Request;

class TemaController extends Controller
{
    public function index(){
        return Tema::all();
    }
    public function show($id){
        return Tema::find($id);
    }
}
