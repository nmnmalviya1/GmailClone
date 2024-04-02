import React from 'react'
import { useEffect,useState } from 'react';

export default function Login() {
  
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
      const CLIENT_ID = '178885588176-7rk89c8ju8dmbjddflulvv0sr9kd9evg.apps.googleusercontent.com';
      const REDIRECT_URI = 'http://localhost:3000/inbox'; // Redirect URI configured in Google Developers Console
      const SCOPE = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send'
      const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;

      window.location.href = AUTH_URL;
  };

  const getAccessToken = ()=>{
    const url =window.location.href
    const token = url.match(/access_token=([^&]+)/)
    localStorage.setItem("Token",token && token[1])
  }

  useEffect(()=>{
    getAccessToken()
  },[])

  
    return (
    <div>
      <div>
{accessToken ? (
  <div>
    <h1>Access token obtained</h1>
    <p>Access Token: {accessToken}</p>
  </div>):(
    <>
    <button onClick={handleLogin}>Login with Google</button>
    </>
  )

}

</div>
    </div>
  )
}
