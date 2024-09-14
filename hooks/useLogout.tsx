"use client";
import {
  getAuthState,
  updateLoggedInState,
  updateProfile,
  updateToken,
} from "@/store/auth";
import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function useLogout() {
  const { token } = useSelector(getAuthState);
  const dispatch = useDispatch();
  const logoutHandler = useCallback(async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("config", config);

      await axios.get("http://127.0.0.1:8080/api/v1/auth/logout", config);
      dispatch(updateLoggedInState(false));
      dispatch(updateToken(null));
      dispatch(updateProfile(null));
      localStorage.removeItem("token");
    } catch (error) {}
  }, [dispatch, token]);

  return { logoutHandler };
}

export default useLogout;
