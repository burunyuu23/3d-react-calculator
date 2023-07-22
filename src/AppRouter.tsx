import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import CalcScene from "./views/CalcScene";
import ThreeScene from "./views/ThreeScene";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"
                   element={<CalcScene />} />
            <Route path="/test"
                   element={<ThreeScene />} />
            <Route path="*"
                   element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;