import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
