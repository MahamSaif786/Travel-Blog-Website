
import { compareDesc } from "date-fns";
import { parseISO } from "date-fns/parseISO";  // Correct import for parseISO

export const cx = (...classNames: (string | undefined | null | false)[]): string => {
  return classNames.filter(Boolean).join(" ");
};

export interface Blog {
  publishedAt: string;
}

export const sortBlogs = (blogs: Blog[]): Blog[] => {
  return blogs
    .slice()
    .sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
};

