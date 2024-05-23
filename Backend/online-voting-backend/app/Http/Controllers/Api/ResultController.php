<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\VotingStatus;
use Illuminate\Http\Request;
use App\Models\Candidate;
use App\Models\Result;

class ResultController extends Controller
{
    public function getVotingCounts()
    {
        Result::truncate();
        // Using Eloquent ORM
        $candidateName = Candidate::pluck('name');

        if ($candidateName->count() > 0) {
            $candidateName->map(function ($item, $key) {
                $count = (VotingStatus::where('candidateName', $item)->count());

                $candidate = Candidate::where('name', $item)->first();

                $result = Result::all();

                if($result->count() < 2) {
                    Result::create([
                        'candidateName' => $item,
                        'regNo' => $candidate->regNo,
                        'semester' => $candidate->semester,
                        'symbol' => $candidate->symbol,
                        'votes' => $count
                    ]);
                }
            });


        }
        $result2 = Result::orderBy('votes', 'desc')->get();
        if ($result2) {
            return response()->json([
                'status' => 200,
                'candidateName' => $candidateName,
                'result' => $result2,
                'message' => 'Result added Successfully.'
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No result added'
            ], 404);
        }

    }

    public function getWinner(){
        $voteCount = Result::pluck('votes');

        if($voteCount){
            if($voteCount[0] > $voteCount[1]){
                $candidate = Result::where('votes', $voteCount[0])->first();
    
                return response()->json([
                    'status' => 200,
                    'candidate' => $candidate,
                    'message' => 'Winner found Successfully.'
                ]);
            }else{
                $candidate = Result::where('votes', $voteCount[1])->first();
    
                return response()->json([
                    'status' => 200,
                    'candidate' => $candidate,
                    'message' => 'Winner found Successfully.'
                ]);
            }

        }
        else{
            return response()->json([
                'status' => 404,
                'message' => "Not Votes!"
            ], 404);
        }
    }
   
}
