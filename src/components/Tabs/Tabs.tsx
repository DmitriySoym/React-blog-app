import { NavWrapper, Tab } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";

export const enum TabOne {
  ARTICLE = "articles",
  NEWS = "news",
  FAVORITES = "favorites",
}
interface IProps {
  tab: TabOne;
  setTab: Dispatch<SetStateAction<TabOne>>;
}

export const Tabs = ({ tab, setTab }: IProps) => {
  const [isActive, setIsActive] = useState<TabOne>(TabOne.ARTICLE);

  const handleArticles = () => {
    setTab(TabOne.ARTICLE);
    setIsActive(TabOne.ARTICLE);
  };

  const handleNews = () => {
    setTab(TabOne.NEWS);
    setIsActive(TabOne.NEWS);
  };

  const handleFavorites = () => {
    setTab(TabOne.FAVORITES);
    setIsActive(TabOne.FAVORITES);
  };

  return (
    <NavWrapper>
      <Tab isActive={isActive === TabOne.ARTICLE} onClick={handleArticles}>
        Articles
      </Tab>
      <Tab isActive={isActive === TabOne.NEWS} onClick={handleNews}>
        News
      </Tab>
      <Tab isActive={isActive === TabOne.FAVORITES} onClick={handleFavorites}>
        Favorites
      </Tab>
    </NavWrapper>
  );
};
