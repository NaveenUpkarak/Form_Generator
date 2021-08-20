import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css"

export default function DropDown({fields}) {

    const dropdownContent = fields.dropdown_content

  return (
    <div className={styles.dropdown}>
    <div>{fields.label}</div>
      <input style={{padding: "5px", width: "100px"}} value={fields.value}></input>
      <FontAwesomeIcon style={{ marginLeft: "-15px" }} icon={faCaretDown} />
      <div className={styles.dropContent}>
        <a href="#">{dropdownContent.link_1}</a>
        <a href="#">{dropdownContent.link_2}</a>
        <a href="#">{dropdownContent.link_3}</a>
      </div>
    </div>
  );
}