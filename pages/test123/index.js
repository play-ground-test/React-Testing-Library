import React, { useState } from "react";
import { getName } from "../../lib/data";
import styles from './index.module.css'




const Index = (props) => {
const {name} =props

  return (
    <div className={styles.container}   data-testid="hi~"> 
     HI~ {name}
    </div>
  );
};



export async function getStaticProps() {
  const name = getName();
  return {
    props: {
      name,
    },
  };
}

export default Index;
