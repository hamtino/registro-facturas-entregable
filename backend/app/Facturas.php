<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facturas extends Model
{
    protected $fillable = ['emisor', 'receptor', 'valor', 'iva', 'total'];

}
