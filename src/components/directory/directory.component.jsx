import React from 'react';
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directorySelectors.js";
import { createStructuredSelector } from "reselect";

const  Directory = ({ sections }) => {

  return (
      <div className = "directory-menu">
          {
              sections.map(({id , ...otherSectionProps }) => (
                  <MenuItem
                          key      = {id}
                          {...otherSectionProps}
                  >

                  </MenuItem>  
              ))
          }
          
      </div>
  )
}

const mapStateToProps =  createStructuredSelector ({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
    
