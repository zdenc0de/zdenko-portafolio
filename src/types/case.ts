export type Case = {
  slug: string;
  title: string;
  blurb: string;
  cover: string;        // /media/cases/xxx.jpg
  tags: string[];
  impact?: string;
};
