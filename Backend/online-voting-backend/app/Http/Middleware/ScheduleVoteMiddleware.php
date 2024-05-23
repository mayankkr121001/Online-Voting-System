<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;
use App\Models\Scheduler;
use App\Models\VotingStatus;

class ScheduleVoteMiddleware
{
    public function handle($request, Closure $next)
    {
        $scheduleDetails = Scheduler::first();
        $now = Carbon::now('Asia/Kolkata');

        $currentTime = $now->format('H:i');
        if (empty($scheduleDetails)) {
            return response()->json([
                'status' => '403',
                'message' => "Schedule not defined yet."
            ], 403);

        } else if (VotingStatus::where('voterRegNo', $request->regNo)->first()) {
            return response()->json([
                'status' => '403',
                'message' => "You have already voted successfully."
            ], 403);

        } else if ($now->isSameDay($scheduleDetails->date) && ($currentTime > $scheduleDetails->startTime && $currentTime < $scheduleDetails->endTime)) {

            return $next($request);

        }else {
            return response()->json([
                'status' => '403',
                'message' => "Vote starts on $scheduleDetails->date between $scheduleDetails->startTime and $scheduleDetails->endTime"
            ], 403);
        }


    }
}