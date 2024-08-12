<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            [
                'title' => 'First Task',
                'description' => 'This is the description for the first task.',
                'is_favorite' => true,
                'color' => 'blue',
            ],
            [
                'title' => 'Second Task',
                'description' => 'This is the description for the second task.',
                'is_favorite' => false,
                'color' => 'red',
            ],
        ]);
    }
}

