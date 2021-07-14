<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ResetPasswordController extends Controller
{
    //

    public function sendEmail(Request $request)
    {
    	// return $request->all();
    	if(! $this->validateEmail($request->email)){
    		return $this->failedResponse();
    	}

    	$this->send($request->email);
    	return $this->successResponse();
    }

    public function send($email)
    {	
    	$token = $this->createToken($email);
    	Mail::to($email)->send(new ResetPasswordMail($token));
    }

    public function createToken($email)
    {	
    	$oldToken = DB::table('password_resets')->where('email', $email)->first();
    	if($oldToken){
    		return $oldToken;
    	}

    	$token = str_random(60);
    	$this->saveToken($token,$email);
    	return $token;
    }

    public function saveToken($token,$email)
    {
    	DB::table('password_resets')->insert([
    		'token'=> $token,
    		'email'=> $email,
    		'created_at' => Carbon::now()
    	]);
    }

    public function validateEmail($email)
    {
    	return !!User::where('email', $email)->first(); // !! makes it boolean
    }

    public function failedResponse()
    {
    	return response()->json([
            'error' => 'Email does\'t found on our database'
        ], Response::HTTP_NOT_FOUND);
    }

    public function successResponse()
    {
    	return response()->json([
    		'error'=> "Reset Email sent successfully."
    	], Response::HTTP_OK);
    }
}
