import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import RequireAuth from "./components/RequireAuth";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Header />
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const dispatchStateToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(App);
