import React from 'react';
// import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectores.js";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from './collections-overview.styles';


const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );

const mapStateToProps =  createStructuredSelector ({
    collections: selectCollectionsForPreview
  });

export default connect(mapStateToProps)(CollectionsOverview);