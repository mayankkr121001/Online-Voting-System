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
            'name' => 'required|string|max:30',
            'regNo' => 'required|string|max:20|unique:candidates',
            'semester' => 'required|string|max:10',
            'image' => 'image',
            'symbol' => 'image',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }
        else{

            $image = $request->file('image');
            if ($image->isValid()) {
                $filename_image = uniqid() . '.' . $image->getClientOriginalExtension();
                $directory = public_path('candidateImage');
                $image->move($directory, $filename_image);
                $imageUrl = url('public/candidateImage/' . $filename_image);
            }
            

            $symbol = $request->file('symbol');
            
            if ($symbol->isValid()) {
                $filename_symbol = uniqid() . '.' . $symbol->getClientOriginalExtension();
                $directory = public_path('candidateSymbol');
                $symbol->move($directory, $filename_symbol);
                $symbolUrl = url('public/candidateSymbol/' . $filename_symbol);
			}

            if(Candidate::count() < 2){
                $candidate = Candidate::create([
                    'name' => $request->name,
                    'regNo' => $request->regNo,
                    'semester' => $request->semester,
                    'image'=> $imageUrl,
                    'symbol'=>$symbolUrl
                ]);
            }else{
                return response()->json([
                    'status' => 400,
                    'message' => "Already have two candidates"
                ], 400);
            }

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
                'message' => "No Such Candidate Found!"
            ], 404);
        }
    }
}
