<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    public function index(){
        return Szavak::all();
    }
    public function show(){
        $szavaktemaval=Szavak::with("tema")->get();
        return response()->json($szavaktemaval);
    }
}
