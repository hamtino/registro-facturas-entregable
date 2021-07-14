<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facturasitems extends Model
{
    protected $fillable = ['factura', 'items', 'cantidad', 'precioUnitario', 'total'];
}
