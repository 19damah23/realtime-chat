import Navbar from "../../components/base/Navbar";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePsikolog,
  getPsikolog,
  registerPsikolog,
} from "../../configs/redux/actions/userActions";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const validatingSchema = yup.object({
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters!")
      .required("Password is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    name: yup
      .string()
      .min(4, "Name must be at least 4 characters!")
      .required("Name is required"),
  });

  useEffect(() => {
    dispatch(getPsikolog());
  }, [dispatch]);

  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deletePsikolog(id)),
        },
        {
          label: "No",
          onClick: () =>
            toast.error("Cancelled!", {
              position: toast.POSITION.TOP_RIGHT,
            }),
        },
      ],
    });
  };

  const { psikolog } = useSelector((state) => state.user);

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={4000} />
      <Navbar />

      <div className="container mx-auto text-base-content min-h-screen pt-20">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-4xl my-2">Psikolog</h1>
          <label
            htmlFor="my-modal-2"
            className="px-2 py-1 border border-gray-400 text-white bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none cursor-pointer"
            onClick={() => setModal(!modal)}
          >
            Tambah psikolog
          </label>
          <input
            type="checkbox"
            id="my-modal-2"
            className="modal-toggle"
            checked={modal}
          />
          <div className="modal">
            <div className="modal-box px-0 py-0">
              <Formik
                initialValues={{
                  role: "psikolog",
                  name: "",
                  email: "",
                  password: "",
                }}
                validationSchema={validatingSchema}
                onSubmit={(values, { resetForm }) => {
                  dispatch(registerPsikolog(values));
                  setModal(!modal);
                  resetForm();
                }}
              >
                {({
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  values,
                  handleSubmit,
                }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8"
                  >
                    <input
                      type="hidden"
                      name="role"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.role}
                    />
                    <div className="mb-8">
                      <h5 className="font-semibold text-xl uppercase text-gray-600">
                        Add new psikolog
                      </h5>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name && errors.name && (
                        <div className="text-xs text-red-500">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && errors.email && (
                        <div className="text-xs text-red-500">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="********"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password &&
                        touched.password &&
                        errors.password && (
                          <div className="text-xs text-red-500">
                            {errors.password}
                          </div>
                        )}
                    </div>
                    <div className="flex items-center justify-end gap-3">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Simpan
                      </button>
                      <label
                        htmlFor="my-modal-2"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        onClick={() => setModal(!modal)}
                      >
                        Cancel
                      </label>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <table className="table-auto border-collapse border border-gray-700 w-full">
          <thead>
            <tr>
              <th className="lg:w-1/2 border border-gray-600">Name</th>
              <th className="lg:w-1/4 border border-gray-600">Email</th>
              <th className="lg:w-1/4 border border-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {psikolog &&
              psikolog.map((item) => (
                <tr key={item.id}>
                  <td className="px-2 border border-gray-600">{item.name}</td>
                  <td className="text-center border border-gray-600">
                    {item.email}
                  </td>
                  <td className="text-center border border-gray-600">
                    <button
                      className="px-2 border mx-1 my-2 focus:outline-none rounded-md border-gray-500 bg-red-700 text-white hover:bg-red-500"
                      onClick={() => submit(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
