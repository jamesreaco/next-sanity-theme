import { PagesItem } from './items/pages';
import { SettingsItem } from './items/settings';
import { PostsItem } from './items/documents/post';
import type { StructureResolver } from "sanity/structure";
import { CaseStudyItem } from './items/documents/case-study';

export const structure: StructureResolver = (S, _context) =>
  S.list()
    .title('Content')
    .items([
      SettingsItem(S),
      S.divider(),
      PagesItem(S),
      PostsItem(S),
      CaseStudyItem(S),
      S.divider(),
    ])


  

  

  





    