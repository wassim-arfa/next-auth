import { useEffect } from "react";
import { themeChange } from "theme-change";
const Navbar = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">DaisyUI</span>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="card shadow-lg compact side bg-base-100">
          <div className="form-control">
            <label className="cursor-pointer label">
              <div className="flex space-x-3 flex-0">
                🌚
                <input
                  type="checkbox"
                  data-toggle-theme="dark"
                  defaultChecked={true}
                  className="toggle"
                />
                <span className="toggle-mark" />
                <div className="flex-1">🌞</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
