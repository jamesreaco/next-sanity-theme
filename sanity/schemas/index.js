import settings from "./settings";
import page from "./page";
import homePage from "./core-pages/homePage";
import blogPage from "./core-pages/blogPage";
import post from "./post";
import caseStudy from "./caseStudy";
import menuItem from "./menuItem";
import heroBlock from "./blocks/heroBlock";
import headerBlock from "./blocks/headerBlock";
import latestPostsBlock from "./blocks/latestPostsBlock";
import latestCaseStudies from "./blocks/latestCaseStudies";
import caseStudyArchiveBlock from "./blocks/caseStudyArchiveBlock";

export const schemaTypes = [
  settings,
  page,
  homePage,
  blogPage,
  post,
  caseStudy,
  menuItem,
  heroBlock,
  headerBlock,
  latestPostsBlock,
  latestCaseStudies,
  caseStudyArchiveBlock
]