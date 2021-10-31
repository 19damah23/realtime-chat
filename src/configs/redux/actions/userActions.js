import backendApi from "../../api/backendApi";
import { actionTypes } from "../constants/actionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const login = (data, history) => (dispatch) => {
  backendApi
    .post(`auth/login`, data)
    .then((res) => {
      const resultLogin = res.data.user;
      dispatch({ type: actionTypes.LOGIN_USER, payload: resultLogin });
      localStorage.setItem("token", resultLogin.token);
      localStorage.setItem("role", resultLogin.role);

      if (resultLogin.role === "admin") {
        history.push("/dashboard");
      } else {
        history.push("/");
      }
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.LOGIN_ERROR,
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};

export const getUser = () => (dispatch) => {
  backendApi
    .get("users/user", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      const user = res.data.user[0];
      console.log(res.data.user);
      dispatch({ type: actionTypes.GET_USER, payload: user });
    });
};

export const register = (data, history) => (dispatch) => {
  backendApi
    .post(`auth/register`, data)
    .then((res) => {
      toast.success("Register success, verify your email now!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        history.push("/login");
      }, 4500);
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};

export const registerPsikolog = (data) => (dispatch) => {
  backendApi
    .post(`auth/register`, data)
    .then((res) => {
      toast.success("Register success, verify your email now!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      dispatch(getPsikolog());
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
};

export const getPsikolog = () => async (dispatch) => {
  try {
    const response = await backendApi.get("/users/psikolog", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const psikolog = response.data.psikolog;

    dispatch({ type: actionTypes.GET_PSIKOLOG, payload: psikolog });
  } catch (error) {
    console.log(error.response);
  }
};

export const deletePsikolog = (id) => async (dispatch) => {
  try {
    await backendApi.delete(`/users/psikolog/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    dispatch(getPsikolog());
  } catch (error) {
    console.log(error.response);
  }
};
