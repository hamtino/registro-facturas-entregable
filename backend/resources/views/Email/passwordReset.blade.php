@component('mail::message')
# Change password Request

Click on the button below to change password

@component('mail::button', ['url' => config('app.appurl').config('app.response-password-reset').'?token='.$token->token])

Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
