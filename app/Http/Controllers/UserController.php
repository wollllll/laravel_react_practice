<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * user一覧取得
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function get()
    {
        $users = User::get();

        return response()->json([
            'users' => $users
        ]);
    }

    /**
     * user詳細画面
     *
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(User $user)
    {
        return response()->json([
            'user' => $user
        ]);
    }
}
