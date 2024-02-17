import "./Resume.scss";

import React, { useState } from "react";
import { FaNetworkWired, FaCode } from "react-icons/fa";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SchoolIcon from "@mui/icons-material/School";

import Education from "../Education";
import Skills from "../Skills";
import Experience from "../Experience";

const TabPanel = (props) => {
  const { children, value, index, className, ...other } = props;
  return (
    <div
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const Resume = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div id="resume" className="resume-container">
      <div className="resume-wrapper">
        <div className="resume-title-section">
          <div className="resume-title-bar"></div>
          <div className="resume-title">Resume</div>
          <div className="resume-title-bar"></div>
        </div>
        <div className="resume-tabs-wrapper">
          <Tabs
            classes={{ root: "tab", scrollButtons: "tab-scroll-buttons" }}
            value={currentTab}
            onChange={handleChange}
            indicatorColor="white !important"
            aria-label="icon position tabs"
          >
            <Tab
              icon={<SchoolIcon />}
              iconPosition="start"
              label="Education"
              classes={{ root: "inactive-tab", selected: "selected-tab" }}
            />
            <Tab
              icon={<FaCode style={{ width: 22, height: 18 }} />}
              iconPosition="start"
              label="Skills"
              classes={{ root: "inactive-tab", selected: "selected-tab" }}
            />
            <Tab
              icon={<FaNetworkWired style={{ width: 22, height: 18 }} />}
              iconPosition="start"
              label="Experience"
              classes={{ root: "inactive-tab", selected: "selected-tab" }}
            />
          </Tabs>
        </div>
        <TabPanel className="tab-panel" value={currentTab} index={0}>
          <Education />
        </TabPanel>
        <TabPanel className="tab-panel" value={currentTab} index={1}>
          <Skills />
        </TabPanel>
        <TabPanel className="tab-panel" value={currentTab} index={2}>
          <Experience />
        </TabPanel>
      </div>
    </div>
  );
};

export default Resume;
