import React from "react";
import MenueItem from "../MenueItem/MenueItem";
import "./directory.style.scss";
import { DirectoryMenuContainer } from "./Directory.style";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://dkstatics-public.digikala.com/digikala-products/113349491.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://dkstatics-public.digikala.com/digikala-products/117620182.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://dkstatics-public.digikala.com/digikala-products/115199581.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womes",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/51eTChBKn5L._AC_SL1000_.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/51BZEsLh4IL._AC_SL1000_.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <DirectoryMenuContainer>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenueItem key={id} {...otherSectionProps} />
        ))}
      </DirectoryMenuContainer>
    );
  }
}

export default Directory;
