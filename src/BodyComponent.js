import Sidebar from './SidebarComponent';
import Profile from './ProfileComponent';

const Body = () => {
  return (
    <div className="main-card">
      <Sidebar />

      <Profile />
    </div>
  );
};

export default Body;
