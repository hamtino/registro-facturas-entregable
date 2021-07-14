<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Facturas extends Migration
{
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->integer('nit');
            $table->timestamps();
        });

        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('descripcion');
            $table->integer('precio');
            $table->timestamps();
        });

        Schema::create('facturas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('emisor')->unsigned();
            $table->integer('receptor')->unsigned();
            $table->double('valor');
            $table->double('iva');
            $table->double('total');
            $table->timestamps();
            $table->foreign('emisor')->references('id')->on('personas');
            $table->foreign('receptor')->references('id')->on('personas');
        });

        Schema::create('facturasItems', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('factura')->unsigned();
            $table->integer('items')->unsigned();
            $table->integer('cantidad');
            $table->double('precioUnitario');
            $table->double('total');
            $table->timestamps();
            $table->foreign('factura')->references('id')->on('facturas');
            $table->foreign('items')->references('id')->on('items');
        });

        DB::table('personas')->insert([
            ['nombre' => 'juan', 'nit' => '1106778472'],
            ['nombre' => 'pepito', 'nit' => '123456789']
        ]);

        DB::table('items')->insert([
            ['descripcion' => 'arroz', 'precio' => 1800],
            ['descripcion' => 'azucar', 'precio' => 2200],
            ['descripcion' => 'aceite', 'precio' => 9000]
        ]);

        DB::table('facturas')->insert([
            ['emisor' => 1, 'receptor' => 2, 'valor' => 100000, 'iva' => 19000, 'total' => 119000],
            ['emisor' => 2, 'receptor' => 1, 'valor' => 200000, 'iva' => 38000, 'total' => 238000]
        ]);

        DB::table('facturasItems')->insert([
            ['factura' => 1, 'items' => 1, 'cantidad' => 1, 'precioUnitario' => 1800, 'total' => 1800],
            ['factura' => 2, 'items' => 3, 'cantidad' => 2, 'precioUnitario' => 2200, 'total' => 4400],
        ]);
    }


    public function down()
    {
        //
    }
}
