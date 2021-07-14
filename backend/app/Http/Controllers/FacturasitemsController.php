<?php

namespace App\Http\Controllers;
use App\Facturasitems;

use Illuminate\Http\Request;

class FacturasitemsController extends Controller
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
        return Facturasitems::all();
    }

    public function show($id)
    {
        $facturasitems = Facturasitems::find($id);
        return $facturasitems;
    }

    public function store(Request $request)
    {
        $facturasitems = Facturasitems::create($request->all());

        return response()->json($facturasitems, 201);
    }

    public function update(Request $request, $id)
    {
        $data['factura'] = $request->input('factura');;
        $data['items'] = $request->input('items');;
        $data['cantidad'] = $request->input('cantidad');;
        $data['precioUnitario'] = $request->input('precioUnitario');;
        $data['total'] = $request->input('total');;
        Facturasitems::find($id)->update($data);

        //return response()->json($personas, 200);
    }


    public function delete($id)
    {
        $facturasitems = Facturasitems::find($id);
        $facturasitems->delete();

        return response()->json(null, 204);
    }
}
