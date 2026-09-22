import React from "react";
import styles from './pageContainer.module.css'
export default function PageContainer({children}){
    return <div className={styles.pageContainer}>{children}</div>
}