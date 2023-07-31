import settings from "./settings";
import page from "./page";
import homePage from "./core-pages/homePage";
import blogPage from "./core-pages/blogPage";
import caseStudyPage from "./core-pages/caseStudyPage";
import contactPage from "./core-pages/contactPage";
import author from "./author";
import post from "./post";
import postCategory from "./postCategory";
import caseStudy from "./caseStudy";
import menuItem from "./menuItem";
import headerBlock from "./blocks/headerBlock";
import contentBlock from "./blocks/contentBlock";
import textBlock from "./blocks/textBlock";
import latestPostsBlock from "./blocks/latestPostsBlock";

export const schemaTypes = [
  settings,
  page,
  menuItem,
  homePage,
  blogPage,
  caseStudyPage,
  contactPage,
  author,
  post,
  postCategory,
  caseStudy,
  headerBlock,
  contentBlock,
  textBlock,
  latestPostsBlock,
]