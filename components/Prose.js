/** Typography for long-form static pages (legal pages). No plugin needed. */
export default function Prose({ children }) {
  return (
    <div className="max-w-[68ch] space-y-4 leading-7 text-slate-800 [&_a]:font-medium [&_a]:text-navy-700 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:pt-6 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-navy-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      {children}
    </div>
  );
}
