import { Fragment, useState } from "react";
import Summary from "./Summary";
import Skills from "./Skills";

import './ProfileTabs.css';

const ProfileTabs = () => {
  const [selectedTab, setSelectedTab] = useState("summary");

  const handleChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  const checkTabActive = (currentTab) => {
    return selectedTab === currentTab ? "active gradient-text" : "";
  }

  return (
    <Fragment>
      <div className="fade-in-right">
        <div className="container">
          <div className="row mb-2 mb-lg-3">
            <div className="col-md-6">
              <div
                className="sub-title d-flex justify-content-center  "
                onClick={() => handleChangeTab("summary")}
              >
                <h3 className={`my-2 tab ${checkTabActive("summary")}`}>
                  Summary
                </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="sub-title d-flex justify-content-center  "
                onClick={() => handleChangeTab("skills")}
              >
                <h3 className={`my-2 tab ${checkTabActive("skills")}`}>
                  Skills
                </h3>
              </div>
            </div>

          </div>
        </div>

        {selectedTab === "summary" && (
          <Summary selectedTab={selectedTab} />
        )}
        {selectedTab === "skills" && (
          <Skills selectedTab={selectedTab} />
        )}
      </div>
    </Fragment>
  );
};

export default ProfileTabs;
