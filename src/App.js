import React from "react";
import "@material-tailwind/react/tailwind.css";
import Router from "./configs/route";
import { useDispatch, useSelector } from "react-redux";
import { get_initial_theme } from "./configs/redux/actions/themeActions";

function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(get_initial_theme());
    }, [dispatch]);

    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className="App text-base-content" data-theme={theme}>
            <Router />
        </div>
    );
}

export default App;
