<?php

namespace App\Http\Controllers;
use App\Facturas;

use Illuminate\Http\Request;

class FacturasController extends Controller
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
        return Facturas::all();
    }

    public function show($id)
    {
        $facturas = Facturas::find($id);
        return $facturas;
    }

    public function store(Request $request)
    {
        $facturas = Facturas::create($request->all());

        return response()->json($facturas, 201);
    }

    public function update(Request $request, $id)
    {
        $data['emisor'] = $request->input('emisor');;
        $data['receptor'] = $request->input('receptor');;
        $data['valor'] = $request->input('valor');;
        $data['iva'] = $request->input('iva');;
        $data['total'] = $request->input('total');;
        Facturas::find($id)->update($data);

        //return response()->json($personas, 200);
    }


    public function delete($id)
    {
        $facturas = Facturas::find($id);
        $facturas->delete();

        return response()->json(null, 204);
    }
}
