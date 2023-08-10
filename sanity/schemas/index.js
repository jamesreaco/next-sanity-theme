import settings from "./settings";
import caseStudy from "./caseStudy";
import menuItem from "./menuItem";

// core pages schema 
import page from "./page";
import homePage from "./core-pages/homePage";
import blogPage from "./core-pages/blogPage";
import caseStudyPage from "./core-pages/caseStudyPage";
import contactPage from "./core-pages/contactPage";

const corePagesSchema = [
  page,
  homePage,
  blogPage,
  caseStudyPage,
  contactPage
]

// page builder schema
import headerBlock from "./blocks/page-builder/headerBlock";
import contentBlock from "./blocks/page-builder/contentBlock";
import textBlock from "./blocks/page-builder/textBlock";
import latestPostsBlock from "./blocks/page-builder/latestPostsBlock";

const pageBuilderSchema = [
  headerBlock,
  contentBlock,
  textBlock,
  latestPostsBlock
]

// post builder schema
import post from "./post";
import author from "./author";
import postCategory from "./postCategory";
import postContentBlock from "./blocks/post-builder/postContentBlock";
import postQuoteBlock from "./blocks/post-builder/postQuoteBlock";
import postImageBlock from "./blocks/post-builder/postImageBlock";

const postBuilderSchema = [
  post,
  author,
  postCategory,
  postContentBlock, 
  postQuoteBlock, 
  postImageBlock
]

export const schemaTypes = [
  settings,
  menuItem,
  caseStudy,
  ...corePagesSchema,
  ...pageBuilderSchema,
  ...postBuilderSchema
]