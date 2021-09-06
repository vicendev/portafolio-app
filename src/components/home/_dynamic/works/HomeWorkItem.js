import React from 'react'
import Icon from '@material-ui/core/Icon';
import { CardMedia } from '@material-ui/core'

export const HomeWorkItem = ({id, title, summary, description, imageSource, repositoryUrl, siteUrl}) => {

  return (
  <div className="column is-4">
    <div className="card">
      <CardMedia
        className="homeWorks__card-image"
        image={imageSource}
        title={title}
      />
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">
          {summary}
          <div className="homeWorks__icons">
            {
              (repositoryUrl != null) ? 
                <a 
                  href={repositoryUrl} 
                  target="__blank">
                    <Icon style={{fontSize: 40}} className="fa fa-code-fork" />
                </a>
              : null
            } 
            {
              (siteUrl != null) ?
                <a 
                  href={siteUrl} 
                  target="__blank">
                    <Icon style={{fontSize: 40}} className="fa fa-globe" />
                </a>
              : null
            }
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
