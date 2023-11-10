import BlogRoute from "./router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from "./redux/store";
function App() {
  return (
<>
{/* <User/> */}
<Provider store={store}>
<BlogRoute/>
<ToastContainer />
</Provider>
</>    
 );
}

export default App;
