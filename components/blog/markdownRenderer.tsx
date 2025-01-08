/* eslint-disable @next/next/no-img-element */
// components/MarkdownRenderer.tsx

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { mapLanguageNameForRendering } from "../../lib/utils";
import { CodeBlock, nord } from "react-code-blocks";

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return (
    <div className="prose max-w-none text-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1
              className="text-4xl font-bold mt-8 mb-4 text-foreground"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="text-3xl font-semibold mt-6 mb-3 text-foreground"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="text-2xl font-semibold mt-4 mb-2 text-foreground"
              {...props}
            />
          ),
          h4: ({ ...props }) => (
            <h4
              className="text-xl font-semibold mt-3 mb-2 text-foreground"
              {...props}
            />
          ),
          h5: ({ ...props }) => (
            <h5
              className="text-lg font-semibold mt-2 mb-1 text-foreground"
              {...props}
            />
          ),
          h6: ({ ...props }) => (
            <h6
              className="text-base font-semibold mt-1 mb-1 text-foreground"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p className="mb-4 text-lg text-foreground-200" {...props} />
          ),
          strong: ({ ...props }) => (
            <strong className="font-bold text-foreground" {...props} />
          ),
          em: ({ ...props }) => (
            <em className="italic text-foreground-200" {...props} />
          ),
          u: ({ ...props }) => (
            <u className="underline text-accent" {...props} />
          ),
          code: ({ className, children, ...props }) => {
            const match = className?.startsWith("language-") ?? false;
            const code = children?.toString()!.trim() ?? "";
            return !match ? (
              <code
                className="bg-background-200 text-foreground p-1 rounded-md"
                {...props}
              >
                {code}
              </code>
            ) : (
              <div className="mb-4">
                <CodeBlock
                  text={code}
                  language={mapLanguageNameForRendering(className!)}
                  showLineNumbers={true}
                  theme={nord}
                />
              </div>
            );
          },
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-accent pl-4 italic text-foreground-300 my-4"
              {...props}
            />
          ),
          ul: ({ ...props }) => (
            <ul
              className="list-disc pl-6 mb-4 space-y-2 text-foreground-200"
              {...props}
            />
          ),
          ol: ({ ...props }) => (
            <ol
              className="list-decimal pl-6 mb-4 space-y-2 text-foreground-200"
              {...props}
            />
          ),
          li: ({ ...props }) => (
            <li className="text-lg mb-2 text-foreground-200" {...props} />
          ),
          img: ({ ...props }) => (
            <img
              src={props.src!}
              className="max-w-full h-auto rounded-lg"
              alt={props.alt ?? ""}
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a className="text-accent hover:underline" {...props} />
          ),
          table: ({ ...props }) => (
            <table
              className="table-auto border-collapse bg-background-100 block overflow-auto"
              {...props}
            />
          ),
          thead: ({ ...props }) => (
            <thead className="bg-background-200 text-foreground" {...props} />
          ),
          tbody: ({ ...props }) => <tbody {...props} />,
          th: ({ ...props }) => (
            <th
              className="px-4 py-2 text-left border-b border-background-200 text-foreground"
              {...props}
            />
          ),
          td: ({ ...props }) => (
            <td
              className="px-4 py-2 border-b border-background-200 text-foreground-200"
              {...props}
            />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
