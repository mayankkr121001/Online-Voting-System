<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Scheduler;

class SchedulerController extends Controller
{
    public function store(Request $request)
    {

        if (Scheduler::count() == 0) {
            $schedule = Scheduler::create([
                'position' => $request->position,
                'date' => $request->date,
                'startTime' => $request->startTime,
                'endTime' => $request->endTime


            ]);
        }else{
            return response()->json([
                'status' => 400,
                'message' => "Already Scheduled"
            ], 400);
        }

        if ($schedule) {
            return response()->json([
                'status' => 200,
                'schedule' => $schedule,
                'message' => "Schedule Created Successfully"
            ], 200);
        } else {
            return response()->json([
                'status' => 500,
                'message' => "Something went wrong on Scheduling"
            ], 500);
        }

    }

    public function schduleData()
    {

        $schedule = Scheduler::all();

        if ($schedule->count() > 0) {
            return response()->json([
                'status' => 200,
                'schedule' => $schedule
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No records found'
            ], 404);
        }

    }
    public function destroy($id){
        $schedule = Scheduler::find($id);
        if($schedule){
            $schedule->delete();
            return response()->json([
                'status' => 200,
                'message' => "Schedule deleted Successfully."
            ], 200);
        }
        else{
            return response()->json([
                'status' => 404,
                'message' => "No Such Schedule Found!"
            ], 404);
        }
    }
}
