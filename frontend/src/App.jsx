import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import useMobileView from "./hooks/useMobileView";
import Url_Routes from "./Url_Routes";
import store from "./redux/store";

// toast
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

export default function App() {
  const isMobileView = useMobileView();

  return (
    <Provider store={store}>
      <Url_Routes />
      <ToastContainer
        transition={Slide}
        autoClose={3000}
        hideProgressBar
        closeOnClick
        position={isMobileView ? "top-center" : "top-right"}
        toastClassName={isMobileView ? "rounded p-4 m-4" : "rounded-lg"}
        theme={isMobileView ? "colored" : undefined}
      />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
