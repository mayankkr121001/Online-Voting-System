<?php

namespace App\Http\Controllers\Api;

use App\Models\VotingStatus;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class VotingStatusController extends Controller
{
    public function showVotingStatus()
    {

        $votingStatus = VotingStatus::all();

        if ($votingStatus->count() > 0) {
            return response()->json([
                'status' => 200,
                'votingStatus' => $votingStatus
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No records found'
            ], 404);
        }

    }
    public function storeVotingStatus(Request $request)
    {
            $votingStatus = VotingStatus::create([
                'voterName' => $request->voterName,
                'voterRegNo' => $request->voterRegNo,
                'candidateName' => $request->candidateName,
                'symbol' => $request->symbol
            ]);

            if($votingStatus){
                return response()->json([
                    'status' => 200,
                    'message' => "VotingStatus Created Successfully"
                ], 200);
            }
            else{
                return response()->json([
                    'status' => 500,
                    'message' => "Something went wrong"
                ], 500);
            }
            
        }
        public function showVotedFlag($voterRegNo){
            $votingStatus = VotingStatus::where('voterRegNo', $voterRegNo)->first();
            if($votingStatus){
                return response()->json([
                    'status' => 200,
                    'success' => true,
                    'message' => "Voter Already Voted."
                ], 200);
            }
            else{
                return response()->json([
                    'status' => 404,
                    'success' => false,
                    'message' => "Not Voted!"
                ], 404);
            }
        }
    
}
