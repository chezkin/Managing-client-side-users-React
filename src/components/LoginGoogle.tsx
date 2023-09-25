import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';

const clientID = '712957607994-ji3ddn5pgmuh29uom17d39fvftft5bld.apps.googleusercontent.com';
import React from 'react'

type Props = {}

const LoginGoogle = (props: Props) => {

const onSuccess = (res : GoogleLoginResponse | GoogleLoginResponseOffline) => {
   if('profileObj' in res) {console.log(res.profileObj);}
    console.log('onSuccess');
};

const onFailure = (res : any) => {
    console.log('onFailure', res);
    
};

  return (
    <div>
        <GoogleLogin
        clientId={clientID}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'https://www.google.com'}
        isSignedIn={true}
        />
    </div>
  )
}

export default LoginGoogle