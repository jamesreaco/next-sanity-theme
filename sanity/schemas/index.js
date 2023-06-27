import settings from "./settings";
import page from "./page";
import homePage from "./core-pages/homePage";
import blogPage from "./core-pages/blogPage";
import caseStudyPage from "./core-pages/caseStudyPage";
import post from "./post";
import postCategory from "./postCategory";
import caseStudy from "./caseStudy";
import menuItem from "./menuItem";
import heroBlock from "./blocks/heroBlock";
import headerBlock from "./blocks/headerBlock";
import latestPostsBlock from "./blocks/latestPostsBlock";
import latestCaseStudiesBlock from "./blocks/latestCaseStudiesBlock";
import caseStudyArchiveBlock from "./blocks/caseStudyArchiveBlock";

export const schemaTypes = [
  settings,
  page,
  homePage,
  blogPage,
  caseStudyPage,
  post,
  postCategory,
  caseStudy,
  menuItem,
  heroBlock,
  headerBlock,
  latestPostsBlock,
  latestCaseStudiesBlock,
  caseStudyArchiveBlock
]