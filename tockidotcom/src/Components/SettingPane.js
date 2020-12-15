import React, { Component } from "react";
import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu,
} from "react-settings-pane";

import { green } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import "./setting.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const SettingPane = () => {
  const useStyles1 = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      flex: 1,
      position: "relative",
      minHeight: 200,
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[600],
      },
    },
  }));

  const classess1 = useStyles1();
  let settings = {
    "mysettings.general.name": "Dennis Stücken",
    "mysettings.general.color-theme": "purple",
    "mysettings.general.email": "dstuecken@react-settings-pane.com",
    "mysettings.general.picture": "earth",
    "mysettings.profile.firstname": "Dennis",
    "mysettings.profile.lastname": "Stücken",
  };

  // Define your menu
  const menu = [
    {
      title: "General", // Title that is displayed as text in the menu
      url: "/settings/general", // Identifier (url-slug)
    },
    {
      title: "Profile",
      url: "/settings/profile",
    },
  ];

  // Define one of your Settings pages
  const dynamicOptionsForProfilePage = [
    {
      key: "mysettings.general.email",
      label: "E-Mail address",
      type: "text",
    },
    {
      key: "mysettings.general.password",
      label: "Password",
      type: "password",
    },
  ];

  // Save settings after close
  const leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
    // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

    if (wasSaved && newSettings !== oldSettings) {
      // do something with the settings, e.g. save via ajax.
    }
  };

  const settingsChanged = (changedSettings) => {
    // this is triggered onChange of the inputs
  };

  const [age, setAge] = React.useState("");
  // Return your Settings Pane
  return (
    <Card>
      <CardContent>
        <FormControl
          className={classess1.formControl}
          style={{ width: "100%" }}
        >
          <InputLabel id="demo-simple-select-label">Cài đặt</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
          >
            <MenuItem value="Gõ lẫn âm">Chung</MenuItem>
            <MenuItem value="Âm đầu">Hiển thị</MenuItem>
            <MenuItem value="Âm chính">Tốc độ nhạy của phím</MenuItem>
          </Select>
        </FormControl>
        <SettingsPane
          items={menu}
          index="/settings/general"
          settings={settings}
          onPaneLeave={leavePaneHandler}
        >
          <SettingsContent header={true}>
            <SettingsPage handler="/settings/general">
              <fieldset className="form-group">
                <label for="profileName">Người dùng: </label>
                <input
                  type="text"
                  className="form-control"
                  name="mysettings.general.name"
                  placeholder="Name"
                  id="general.ame"
                  onChange={settingsChanged}
                  defaultValue={settings["mysettings.general.name"]}
                />
              </fieldset>
              <fieldset className="form-group">
                <label for="profileColor">Màu nền : </label>
                <select
                  name="mysettings.general.color-theme"
                  id="profileColor"
                  className="form-control"
                  defaultValue={settings["mysettings.general.color-theme"]}
                >
                  <option value="blue">Xanh</option>
                  <option value="red">Đỏ</option>
                  <option value="purple">Tím</option>
                  <option value="orange">Cam</option>
                </select>
              </fieldset>
            </SettingsPage>
          </SettingsContent>
        </SettingsPane>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{ marginLeft: "5px" }}
        >
          Lưu
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingPane;
