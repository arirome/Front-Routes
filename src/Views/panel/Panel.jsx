import React from "react";

import Sidebar from "../../Components/sidebar/Sidebar";

import "./panel.scss";
import Widget from "../../Components/widget-backup/Widget";
import Featured from "../../Components/ventas/Ventas";
import Chart from "../../Components/estadisticas/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>


    </div>
  );
};

export default Home;
