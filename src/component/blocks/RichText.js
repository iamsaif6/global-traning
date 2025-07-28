import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function RichText({ content }) {
  return (
    <div className="prose prose-xl max-w-full leading-[160%]">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mt-6 mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mt-4 mb-3" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
