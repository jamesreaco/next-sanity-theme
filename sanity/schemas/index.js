import settings from "./settings";
import page from "./page";
import homePage from "./core-pages/homePage";
import blogPage from "./core-pages/blogPage";
import caseStudyPage from "./core-pages/caseStudyPage";
import author from "./author";
import post from "./post";
import postCategory from "./postCategory";
import caseStudy from "./caseStudy";
import menuItem from "./menuItem";
import heroBlock from "./blocks/heroBlock";
import headerBlock from "./blocks/headerBlock";
import contentBlock from "./blocks/contentBlock";
import textBlock from "./blocks/textBlock";
import latestPostsBlock from "./blocks/latestPostsBlock";
import latestCaseStudiesBlock from "./blocks/latestCaseStudiesBlock";
import caseStudyArchiveBlock from "./blocks/caseStudyArchiveBlock";

export const schemaTypes = [
  settings,
  page,
  menuItem,
  homePage,
  blogPage,
  caseStudyPage,
  author,
  post,
  postCategory,
  caseStudy,
  heroBlock,
  headerBlock,
  contentBlock,
  textBlock,
  latestPostsBlock,
  latestCaseStudiesBlock,
  caseStudyArchiveBlock
]