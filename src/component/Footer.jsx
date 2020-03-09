import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import FooterStyle from 'src/style/Footer.module.scss'
import logo from 'src/res/image/logo.png'
import reactIcon from 'src/res/image/tech/react.png'
import materialUIIcon from 'src/res/image/tech/material-ui.svg'
import webpackIcon from 'src/res/image/tech/webpack.svg'
import sassIcon from 'src/res/image/tech/sass.png'

export default class Footer extends React.Component {
  render() {
    return (
      <Grid
        className={FooterStyle['footer-wrapper']}
        container>
        <Grid
          className={FooterStyle['footer-logo-section']}
          item
          xl={1}>
          <img
            alt='IKMLab logo'
            className={FooterStyle['footer-logo']}
            src={logo}/>
        </Grid>
        <Grid
          className={FooterStyle['footer-copyright-section']}
          item
          xl={1}>
          <p className={FooterStyle['footer-copyright']}>
              Copyright © {new Date(Date.now()).getFullYear()} IKMLab.<br/>
              All right reserved.
          </p>
        </Grid>
        <Grid
          className={FooterStyle['footer-contact-section']}
          item
          xl={2}>
          <List className={''}>
            <ListItem>
              <CallIcon/>
              <a
                className={''}
                href='tel:062757575,62520,2903'>
                  06-275-7575 ext 62520 ext 2903
              </a>
            </ListItem>
            <ListItem>
              <CallIcon/>
              <a
                className={''}
                href='tel:+88662757575,62520,2903'>
                  +886-6-275-7575 ext 62520 ext 2903
              </a>
            </ListItem>
            <ListItem>
              <EmailIcon/>
              <a
                className={''}
                href='mailto:ikmlab@mail.csie.ncku.edu.tw'>
                  ikmlab@mail.csie.ncku.edu.tw
              </a>
            </ListItem>
          </List>
        </Grid>
        <Grid
          className={FooterStyle['footer-power-by-section']}
          item
          xl={1}>
          <h2>Power By</h2>
          <img
            className={FooterStyle['footer-power-by-icon']}
            src={reactIcon}/>
          <img
            className={FooterStyle['footer-power-by-icon']}
            src={webpackIcon}/>
          <img
            className={FooterStyle['footer-power-by-icon']}
            src={materialUIIcon}/>
          <img
            className={FooterStyle['footer-power-by-icon']}
            src={sassIcon}/>
        </Grid>
      </Grid>
    )
  }
}