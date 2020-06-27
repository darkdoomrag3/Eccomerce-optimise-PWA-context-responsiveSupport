import React from "react";
import "./menueitem.scss";
import { withRouter } from "react-router";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenueItem.style";

const MenueItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <>
    <MenuItemContainer
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl} `)}
    >
      <BackgroundImageContainer
        className="backround-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  </>
);

export default withRouter(MenueItem);
