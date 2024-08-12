<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Definindo os campos que podem ser preenchidos em massa
    protected $fillable = [
        'title',
        'description',
        'is_favorite',
        'color',
    ];

    // Se você quiser adicionar regras de validação ou métodos adicionais, pode fazer aqui
    // Por exemplo, um método para formatar a cor ou verificar se a tarefa é favorita
}