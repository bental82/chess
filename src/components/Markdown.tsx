/**
 * Tiny, dependency-free Markdown renderer for our lesson prose.
 * Supports: headings (# ## ###), paragraphs, **bold**, *italic*, `code`,
 * unordered (- ) and ordered (1. ) lists, and blank-line paragraph breaks.
 * This is intentionally minimal — our content uses only this subset.
 */
import { Fragment, type ReactNode } from 'react';

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  // Bold first (handle ** before *)
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    const tok = m[0];
    if (tok.startsWith('**')) {
      parts.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith('`')) {
      parts.push(<code key={key++}>{tok.slice(1, -1)}</code>);
    } else {
      parts.push(<em key={key++}>{tok.slice(1, -1)}</em>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return parts;
}

export default function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n\n+/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split('\n');
        if (/^### /.test(lines[0])) return <h3 key={i}>{renderInline(lines[0].slice(4))}</h3>;
        if (/^## /.test(lines[0])) return <h2 key={i}>{renderInline(lines[0].slice(3))}</h2>;
        if (/^# /.test(lines[0])) return <h2 key={i}>{renderInline(lines[0].slice(2))}</h2>;
        if (lines.every((l) => /^- /.test(l))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.slice(2))}</li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\. /.test(l))) {
          return (
            <ol key={i}>
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^\d+\. /, ''))}</li>
              ))}
            </ol>
          );
        }
        return <p key={i}>{renderInline(block.replace(/\n/g, ' '))}</p>;
      })}
    </>
  );
}
