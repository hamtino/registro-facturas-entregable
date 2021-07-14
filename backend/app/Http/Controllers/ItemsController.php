<?php

namespace App\Http\Controllers;
use App\Items;

use Illuminate\Http\Request;

class ItemsController extends Controller
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
        return Items::all();
    }

    public function show($id)
    {
        $facturas = Items::find($id);
        return $facturas;
    }

    public function store(Request $request)
    {
        $facturas = Items::create($request->all());

        return response()->json($facturas, 201);
    }

    public function update(Request $request, $id)
    {
        $data['descripcion'] = $request->input('descripcion');;
        $data['precio'] = $request->input('precio');;
        Items::find($id)->update($data);

        //return response()->json($personas, 200);
    }


    public function delete($id)
    {
        $items = Items::find($id);
        $items->delete();

        return response()->json(null, 204);
    }
}
