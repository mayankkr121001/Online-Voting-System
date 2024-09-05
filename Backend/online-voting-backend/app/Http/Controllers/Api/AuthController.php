<?php

// namespace App\Http\Controllers;
namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Voter;
use App\Models\Admin;

class AuthController extends Controller
{

    function login(Request $req)
    {
            $voter_data = Voter::where('regNo', $req->regNo)->first();

            if (!empty($voter_data)) {
                if ($req->password == $voter_data->password) {
                    session(['voterRegNosession' => $voter_data->regNo]);

                    return response()->json([
                        'status' => 200,
                        'success' => true,
                        'voters' => $voter_data,
                        'message' => "logged in"
                    ], 200);

                } else {
                    return response()->json([
                        'status' => 404,
                        'success' => false,
                        'message' => "Wrong Password"
                    ], 404);


                }
            } else {
                return response()->json([
                    'status' => 404,
                    'success' => false,
                    'message' => "Wrong registration no."
                ], 404);
            }

    }

    public function logout()
    {
        // Destroy the voter's session data
        session()->forget('voterRegNosession');
        // Optionally, you can also flush all session data: Session::flush();

        return response()->json([
            'status' => 200,
            'success' => true,
            'message' => 'Logged out successfully',
        ], 200);
    }

    function adminLogin(Request $req)
    {
        $admin_data = Admin::where('email', $req->email)->first();

        if (!empty($admin_data)) {
            if ($req->password == $admin_data->password) {
                session(['voterEmailsession' => $admin_data->email]);

                return response()->json([
                    'status' => 200,
                    'success' => true,
                    'admin' => $admin_data,
                    'message' => "Admin logged in"
                ], 200);

            } else {
                return response()->json([
                    'status' => 404,
                    'success' => false,
                    'message' => "Wrong Password"
                ], 404);


            }

        } else {
            return response()->json([
                'status' => 404,
                'success' => false,
                'message' => "Wrong Email."
            ], 404);
        }
    }
    public function adminLogout()
    {
        // Destroy the voter's session data
        session()->forget('voterEmailsession');
        // Optionally, you can also flush all session data: Session::flush();

        return response()->json([
            'status' => 200,
            'success' => true,
            'message' => 'Admin Logged out successfully',
        ], 200);
    }
}