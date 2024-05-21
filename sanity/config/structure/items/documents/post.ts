import { FiEdit2 } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";

export const PostsItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Blog')
    .icon(FiEdit2)
    .child(
      S.list()
        .title('Blog')
        .items([
          S.listItem()
            .title('Posts')
            .child(
              S.documentList()
              .title('All Posts')
              .filter('_type == "post"')
            ),
          S.listItem()
            .title('Categories')
            .child(
              S.documentList()
                .title('Post Categories')
                .filter('_type == "postCategory"')
              ),
          S.listItem()
            .title('Authors')
            .child(
              S.documentList()
                .title('Post Authors')
                .filter('_type == "author"')
              ),
        ])
    )