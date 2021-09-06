import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import {blogList} from '../../../../data-test/data';
import { HomeWorkItem } from './HomeWorkItem';
import { startLoadingProjects } from '../../../../actions/projects';

export const HomeWorksList = () => {

  const dispatch = useDispatch();

  const {projects} = useSelector(state => state.projects)

  useEffect(() => {
    dispatch(startLoadingProjects())
  }, [dispatch])
  //const [list, listState] = useState(blogList)

  return (
    <Grid
      className="homeWorks__section animate__animated animate__backInLeft"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      { projects.map((item, index) =>
        (
          <HomeWorkItem
            key={item.id} 
            id={item.id}
            title={item.title}
            summary={item.summary}
            description={item.content}
            imageSource={item.imageSource}
            repositoryUrl={item.repositoryUrl}
            siteUrl={item.siteUrl}
          />
        )
      )}
    </Grid>
  )
}
