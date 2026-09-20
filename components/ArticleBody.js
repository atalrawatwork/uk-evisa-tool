import RichText from "./RichText";

/** Renders the `content` block array from lib/posts.js. Add new block types here. */
export default function ArticleBody({ blocks }) {
  return (
    <div className="max-w-[68ch] space-y-5 text-[1.0625rem] leading-8 text-slate-800">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-4 font-serif text-2xl font-semibold leading-snug text-navy-900">
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i}>
                <RichText text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-navy-500">
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-navy-600">
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <div key={i} className="rounded-md border-l-4 border-navy-700 bg-navy-50 p-4 text-base leading-7 text-navy-950">
                <RichText text={block.text} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
