import React from 'react';
import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectores.js";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";


const CollectionsOverview = ({ collections }) =>  (

    <div className= 'collections-overview'>
    {
        collections.map( ({ id , ...othercollectionProps }) => (
            <CollectionPreview
                    key = {id}
                    {...othercollectionProps}
            />
        ))
        
    }
    </div>

);

const mapStateToProps =  createStructuredSelector ({
    collections: selectCollectionsForPreview
  });

export default connect(mapStateToProps)(CollectionsOverview);