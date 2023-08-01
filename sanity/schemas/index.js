import settings from "./settings";
import page from "./page";
import post from "./post";
import author from "./author";
import postCategory from "./postCategory";
import caseStudy from "./caseStudy";
import menuItem from "./menuItem";

// core pages
import homePage from "./core-pages/homePage";
import blogPage from "./core-pages/blogPage";
import caseStudyPage from "./core-pages/caseStudyPage";
import contactPage from "./core-pages/contactPage";

// page builder blocks
import headerBlock from "./blocks/page-builder/headerBlock";
import contentBlock from "./blocks/page-builder/contentBlock";
import textBlock from "./blocks/page-builder/textBlock";
import latestPostsBlock from "./blocks/page-builder/latestPostsBlock";

// post builder blocks
import postContentBlock from "./blocks/post-builder/postContentBlock";
import postQuoteBlock from "./blocks/post-builder/postQuoteBlock";

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
  postContentBlock,
  postQuoteBlock
]