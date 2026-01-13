'use client';

import * as runtime from 'react/jsx-runtime';
import Image from 'next/image';
import Link from 'next/link';
import { Children, createElement, useState, use, useRef } from 'react';
import { run } from '@mdx-js/mdx';

function CopyButton({ getCode }: { getCode: () => string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity ${copied ? 'text-accent' : 'text-muted hover:text-secondary'}`}
      aria-label={copied ? 'Copied' : 'Copy'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {copied ? (
          <path d="M5 12l5 5l10 -10" />
        ) : (
          <>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </>
        )}
      </svg>
    </button>
  );
}

function CustomLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  const href = props.href ?? '';

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}

function CustomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt } = props;
  if (!src) return null;
  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={800}
      height={400}
      className="rounded-lg"
    />
  );
}

function Pre({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLPreElement>) {
  const preRef = useRef<HTMLPreElement>(null);

  const getCode = () => {
    if (preRef.current) {
      const codeEl = preRef.current.querySelector('code');
      return codeEl?.textContent ?? '';
    }
    return '';
  };

  return (
    <div className="relative group my-6 rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10">
      <pre ref={preRef} {...props} className="!my-0 !border-0 !bg-transparent !rounded-none">
        {children}
      </pre>
      <CopyButton getCode={getCode} />
    </div>
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const HeadingComponent = ({
    children,
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const childrenString = Children.toArray(children).join('');
    const slug = slugify(childrenString);
    return createElement(`h${level}`, { id: slug }, [
      createElement(
        'a',
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        },
        children,
      ),
    ]);
  };
  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
}

const components = {
  a: CustomLink,
  img: CustomImage,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  pre: Pre,
};

export function MDX({ code }: { code: string }) {
  const { default: Content } = use(run(code, { ...runtime, baseUrl: import.meta.url }));
  return <Content components={components} />;
}
