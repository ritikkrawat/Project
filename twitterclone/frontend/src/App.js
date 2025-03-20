import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import PageLoading from "./pages/PageLoading";
import Feed from "./pages/Feed/Feed";
import Explore from "./pages/Explore/Explore";
import Notification from "./pages/Notifications/Notifications";
import Message from "./pages/Messages/Messages";
import Bookmark from "./pages/Bookmarks/Bookmarks";
import Lists from "./pages/Lists/Lists";
import Profile from "./pages/Profile/Profile";
import More from "./pages/More/More";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}>
            <Route index element = {<Feed />}/>
          </Route>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}>
            <Route path="feed" element={<Feed />} />
            <Route path="explore" element={<Explore />} />
            <Route path="notification" element={<Notification />} />
            <Route path="messages" element={<Message />} />
            <Route path="lists" element={<Lists />} />
            <Route path="bookmarks" element={<Bookmark />} />
            <Route path="profile" element={<Profile />} />
            <Route path="more" element={<More />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/page-loading" element={<PageLoading />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;