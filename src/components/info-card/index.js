import React, { Component } from 'react';
import styles from "./info-card.module.css"

class InfoCard extends Component {
  constructor(props){
    super(props);
    this.info = {
      tweets: '1,337',
      following: '561',
      followers: '768'
    };
  }
  render() {
    return (
      <div className={styles.userInfo}>
        
         <ul>
          <li>Tweets</li>
          <li>{this.info.tweets}</li>
        </ul>
        <ul>
          <li>Following</li>
          <li>{this.info.following}</li>
        </ul>
        <ul>
          <li>Followers</li>
          <li>{this.info.followers}</li>
        </ul>
      </div>
    );
  }
}

export default InfoCard;




