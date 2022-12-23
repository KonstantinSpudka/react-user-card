import React, { Component } from 'react';
import styles from "./foto-card.module.css"

class FotoCard extends Component {
  render() {
    return (
      <div className={styles.userCard}>
        <div className={styles.name}>
          <h1>Emma Watson</h1>
          <p>@EmWatson</p>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzEkAJlMZ3eWDffWMKEwSYZIcIpb4n2SJKA&usqp=CAU"
          alt="Foto"
          className={styles.userFoto}
        />
        <li className={styles.colorStar}><p>+</p></li>
      </div>
    );
  }
}

export default FotoCard;
