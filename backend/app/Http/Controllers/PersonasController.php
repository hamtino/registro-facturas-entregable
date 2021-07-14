<?php

namespace App\Http\Controllers;
use App\Personas;

use Illuminate\Http\Request;

class PersonasController extends Controller
{
    //public function __construct()
    //{
    //    $this->middleware('auth:api', ['except' => []]);
    //}
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function index()
    {
        return Personas::all();
    }

    public function show($id)
    {
        $personas = Personas::find($id);
        return $personas;
    }

    public function store(Request $request)
    {
        $personas = Personas::create($request->all());

        return response()->json($personas, 201);
    }

    public function update(Request $request, $id)
    {
        $data['nombre'] = $request->input('nombre');;
        $data['nit'] = $request->input('nit');;
        Personas::find($id)->update($data);

        //return response()->json($personas, 200);
    }


    public function delete($id)
    {
        $personas = Personas::find($id);
        $personas->delete();

        return response()->json(null, 204);
    }
    
}
