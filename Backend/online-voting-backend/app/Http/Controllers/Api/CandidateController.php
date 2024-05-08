<?php

namespace App\Http\Controllers\Api;

use App\Models\Candidate;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

class CandidateController extends Controller
{
    public function index()
    {
        $candidates = Candidate::all();

        if ($candidates->count() > 0) {
            return response()->json([
                'status' => 200,
                'candidates' => $candidates
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No records found'
            ], 404);
        }

    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'roll' => 'required|integer|max:191',
            'semester' => 'required|string|max:191',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }
        else{
            $candidate = Candidate::create([
                'name' => $request->name,
                'roll' => $request->roll,
                'semester' => $request->semester,
            ]);

            if($candidate){
                return response()->json([
                    'status' => 200,
                    'message' => "Candidate Created Successfully"
                ], 200);
            }
            else{
                return response()->json([
                    'status' => 500,
                    'message' => "Something went wrong"
                ], 500);
            }
        }
    }
    public function destroy($id){
        $candidate = Candidate::find($id);
        if($candidate){
            $candidate->delete();
            return response()->json([
                'status' => 200,
                'message' => "Candidate deleted Successfully."
            ], 200);
        }
        else{
            return response()->json([
                'status' => 404,
                'message' => "No Such Voter Found!"
            ], 404);
        }
    }
}
