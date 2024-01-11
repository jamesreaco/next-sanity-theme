import settings from "./singletons/settings";
import post from "./documents/post";
import postCategory from "./documents/post-category";
import author from "./documents/author";
import menuItem from "./documents/menu-item";
import caseStudy from "./documents/case-study";

const coreSchema = [
  settings,
  post,
  postCategory,
  author,
  menuItem,
  caseStudy,
]

// pages schema 
import homePage from "./singletons/home-page";
import blogPage from "./singletons/blog-page";
import caseStudyPage from "./singletons/case-study-page";
import contactPage from "./singletons/contact-page";
import privacyPage from "./singletons/privacy-page";
import termsPage from "./singletons/terms-page";

const pagesSchema = [
  homePage,
  blogPage,
  caseStudyPage,
  contactPage,
  privacyPage,
  termsPage
]

// post builder schema
import postQuoteBlock from "./objects/post-builder/post-quote-block";
import postImageBlock from "./objects/post-builder/post-image-block";

const postBuilderSchema = [
  postImageBlock,
  postQuoteBlock
]

export const schemaTypes = [
  ...coreSchema,
  ...pagesSchema,
  ...postBuilderSchema
]