// import {
//   BlockTypes,
//   MarkTypes,
//   StoryblokRichText,
//   StoryblokRichTextNode,
// } from "@storyblok/react";
// import Link from "next/link";
// import { ReactElement } from "react";
// import { CopyBlock, atomOneLight } from "react-code-blocks";
// import { mapLanguageNameForRendering } from "../lib/utils";
import MarkdownRenderer from "./markdownRenderer";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// interface RichTextRendererProps {
//   richTextDocument: any;
// }

// const RichTextRenderer: React.FC<RichTextRendererProps> = ({
//   richTextDocument,
// }) => {
//   const resolvers = {
//     [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
//       return node.attrs?.linktype === "story" ? (
//         <Link href={node.attrs?.href} target={node.attrs?.target}>
//           {node.text}
//         </Link>
//       ) : (
//         <a href={node.attrs?.href} target={node.attrs?.target}>
//           {node.text}
//         </a>
//       );
//     },
//     [BlockTypes.CODE_BLOCK]: (node: StoryblokRichTextNode<ReactElement>) => {
//       return (
//         <CopyBlock
//           text={node.content[0].text!}
//           language={mapLanguageNameForRendering(node.attrs!.class)}
//           showLineNumbers={true}
//           theme={atomOneLight}
//         />
//       );
//     },

//     // Resolving Headings
//     [BlockTypes.HEADING]: (node: StoryblokRichTextNode<ReactElement>) => {
//       switch (node.attrs?.level) {
//         case 1:
//           return (
//             <h1 className="text-4xl font-bold mt-4 mb-2">
//               {node.content && node.content[0].text}
//             </h1>
//           );
//         case 2:
//           return (
//             <h2 className="text-3xl font-semibold mt-3 mb-2">
//               {node.content && node.content[0].text}
//             </h2>
//           );
//         case 3:
//           return (
//             <h3 className="text-2xl font-medium mt-2 mb-1">
//               {node.content && node.content[0].text}
//             </h3>
//           );
//         case 4:
//           return (
//             <h4 className="text-xl font-medium mt-2 mb-1">
//               {node.content && node.content[0].text}
//             </h4>
//           );
//         case 5:
//           return (
//             <h5 className="text-lg font-semibold mt-2 mb-1">
//               {node.content && node.content[0].text}
//             </h5>
//           );
//         case 6:
//           return (
//             <h6 className="text-base font-semibold mt-2 mb-1">
//               {node.content && node.content[0].text}
//             </h6>
//           );
//         default:
//           return (
//             <h2 className="text-3xl font-semibold mt-3 mb-2">
//               {node.content && node.content[0].text}
//             </h2>
//           );
//       }
//     },
//   };

//   return (
//     <div className="prose max-w-none">
//       <StoryblokRichText doc={richTextDocument} resolvers={resolvers} />
//     </div>
//   );
// };

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => {
  return (
    <>
      <MarkdownRenderer markdown={content} />
      {/* <RichTextRenderer richTextDocument={content} /> */}
    </>
  );
};

export default BlogPostContent;
