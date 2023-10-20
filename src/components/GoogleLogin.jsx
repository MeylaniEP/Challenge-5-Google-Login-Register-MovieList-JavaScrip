import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs"

function GoogleLogin({}) {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://shy-cloud-3319.fly.dev/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <>
    <div className="d-flex flex-row justify-content-evenly">

      <Button
        variant="transparent"
        className="text-light d-flex align-items-center p- bg-body-transparent border rounded mb-5"
        onClick={() => loginWithGoogle()}
      >
        <FcGoogle className="" /> <span className="mx-2"> Google</span>
      </Button>

      <Button
        variant="transparent"
        className="text-light d-flex align-items-center p- bg-body-transparent border rounded mb-5"
      >
        <BsFacebook className="text-primary" /> <span className="mx-2"> Facebook</span>
      </Button>
    </div>

    </>
  );
}

export default GoogleLogin;
