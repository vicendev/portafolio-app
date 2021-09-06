import React, { useState } from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { TabPanel } from '../../../ui/TabPanel'

/* Static Images*/
import netcore from '../../../../static/images/netcore.jpg';
import nodejs from '../../../../static/images/nodejs.png';
import react from '../../../../static/images/react.png';
import angularjs from '../../../../static/images/angularjs.jpg';
import bootstrap from '../../../../static/images/bootstrap.png';
import bulma from '../../../../static/images/bulma.png';
import sass from '../../../../static/images/sass.jpg';
import mongodb from '../../../../static/images/mongodb.jpg';
import sqlserver from '../../../../static/images/sqlserver.png';
import docker from '../../../../static/images/docker.png';
import aws from '../../../../static/images/aws.jpg';
import git from '../../../../static/images/git.jpg';
import linux from '../../../../static/images/linux.png';

export const HomeTechnologiesList = () => {

  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <>
    <div className="homeTechnologies__section-patch"></div>
    <div className="homeTechnologies__section">
      <AppBar position="static" color="default">
        <Tabs
          className="homeTechnologies__tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Backend" {...a11yProps(0)} />
          <Tab label="FrontEnd" {...a11yProps(1)} />
          <Tab label="Base Datos" {...a11yProps(2)} />
          <Tab label="Cloud" {...a11yProps(3)} />
          <Tab label="Escencial" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="columns animate__animated animate__fadeIn">
          {/* .Net Core */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={netcore} alt=".Net Core"/>
            </figure>
          </div>
          {/* Node JS */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={nodejs}/>
            </figure>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="columns animate__animated animate__fadeIn">
          {/* React */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={react}/>
            </figure>
          </div>
          {/*Angular JS */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={angularjs}/>
            </figure>
          </div>
          {/* Bootstrap */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={bootstrap}/>
            </figure>
          </div>
        </div>
        <div className="columns animate__animated animate__fadeIn">
          {/* Bulma.io */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={bulma}/>
            </figure>
          </div>
          {/* Sass */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={sass}/>
            </figure>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="columns animate__animated animate__fadeIn">
          {/* MongoDB */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={mongodb}/>
            </figure>
          </div>
          {/* SQL */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={sqlserver}/>
            </figure>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="columns animate__animated animate__fadeIn">
          {/* Docker */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={docker}/>
            </figure>
          </div>
          {/* AWS */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={aws}/>
            </figure>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="columns animate__animated animate__fadeIn">
          {/* GIT */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={git}/>
            </figure>
          </div>
          {/* Linux */}
          <div className="column is-4">
            <figure className="image is-256x256">
              <img className="homeTechnologies__image" src={linux}/>
            </figure>
          </div>
        </div>
      </TabPanel>
    </div>
  </>

  )
}
