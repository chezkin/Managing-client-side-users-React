import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import React from 'react'

const clientID = '712957607994-ji3ddn5pgmuh29uom17d39fvftft5bld.apps.googleusercontent.com'

type Props = {}

const LogoutGoogle = (props: Props) => {

    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        // if (res.profileObj) { console.log(res.profileObj); }
        console.log('onSuccess');
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientID}
                buttonText='Loout'
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutGoogle