import fs from 'node:fs';
import path from 'node:path';
import { compile } from '@mdx-js/mdx';
import rehypeShiki from '@shikijs/rehype';

export type Metadata = {
  title: string;
  description: string;
  date: string;
};

export type FrontmatterParseResult = {
  metadata: Metadata;
  content: string;
};

export type MDXFileData = FrontmatterParseResult & {
  slug: string;
  code: string;
};

const postsCache = new Map<string, MDXFileData>();
let allPostsCached: MDXFileData[] | null = null;

export async function compileMDX(content: string): Promise<string> {
  const result = await compile(content, {
    outputFormat: 'function-body',
    development: false,
    rehypePlugins: [[rehypeShiki, { theme: 'vesper' }]],
  });
  return String(result);
}

export function getPosts(): MDXFileData[] {
  if (allPostsCached) {
    return allPostsCached;
  }
  allPostsCached = getMDXData(path.join(process.cwd(), 'posts')).sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );
  return allPostsCached;
}

export async function getPostBySlug(slug: string): Promise<MDXFileData | null> {
  if (postsCache.has(slug)) {
    return postsCache.get(slug) ?? null;
  }

  const post = getPosts().find((post) => post.slug === slug);
  if (!post) return null;

  const code = await compileMDX(post.content);
  const compiledPost = { ...post, code };
  postsCache.set(slug, compiledPost);
  return compiledPost;
}

function parseFrontmatter(fileContent: string): FrontmatterParseResult {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error('No frontmatter found');
  }

  const frontmatter = match[1];
  if (!frontmatter) {
    throw new Error('No frontmatter found');
  }

  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontmatterLines = frontmatter.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontmatterLines.forEach((line) => {
    const [key, ...values] = line.split(': ');
    let value = values.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    if (key && value) {
      metadata[key.trim() as keyof Metadata] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string): FrontmatterParseResult {
  const rawContent = fs.readFileSync(filePath, 'utf-8');

  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): MDXFileData[] {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
      code: '', // Will be compiled on demand
    };
  });
}
