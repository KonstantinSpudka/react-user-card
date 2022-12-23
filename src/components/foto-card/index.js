import React, { Component } from 'react';
import styles from "./foto-card.module.css"

class FotoCard extends Component {
  constructor(props){
    super(props);
    this.user = {
      firstName: 'Emma',
      lastName: 'Watson',
      email: '@EmWatson',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzEkAJlMZ3eWDffWMKEwSYZIcIpb4n2SJKA&usqp=CAU',
      gender: true
    };
    
   
    
  }
  render() {
    const inlineStyle = {
      color: this.user.gender ? "red" : "blue"
        };
    return (
      <div className={styles.userCard}>
        <div className={styles.name}>
          <h1 style={inlineStyle}>{this.user.firstName} {this.user.lastName}</h1>
          <p>{this.user.email}</p>
        </div>

        <img
          src={this.user.img}
          alt="Foto"
          className={styles.userFoto}
        />
        <li className={styles.colorStar}><p>+</p></li>
      </div>
    );
  }
}

export default FotoCard;
