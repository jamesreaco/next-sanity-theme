import settings from "./singletons/settings";
import post from "./documents/post";
import caseStudy from "./documents/case-study";
import menuItem from "./documents/menu-item";

// core pages schema 
import page from "./documents/page";
import homePage from "./singletons/home-page";
import blogPage from "./singletons/blog-page";
import caseStudyPage from "./singletons/case-study-page";
import contactPage from "./singletons/contact-page";

const corePagesSchema = [
  page,
  homePage,
  blogPage,
  caseStudyPage,
  contactPage
]

// page builder schema
import headerBlock from "./objects/page-builder/header-block";
import contentBlock from "./objects/page-builder/content-block";
import textBlock from "./objects/page-builder/text-block";
import author from "./documents/author";
import postCategory from "./documents/post-category";

const pageBuilderSchema = [
  headerBlock,
  contentBlock,
  textBlock,
]

// post builder schema
import postQuoteBlock from "./objects/post-builder/post-quote-block";
import postImageBlock from "./objects/post-builder/post-image-block";

const postBuilderSchema = [
  postImageBlock,
  postQuoteBlock
]

export const schemaTypes = [
  settings,
  post,
  postCategory,
  author,
  menuItem,
  caseStudy,
  ...corePagesSchema,
  ...pageBuilderSchema,
  ...postBuilderSchema
]