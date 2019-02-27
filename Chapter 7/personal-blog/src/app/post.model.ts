export interface IPost {
  id: number;
  title: {
      rendered: string;
  };
  content: {
      rendered: string;
  };
  excerpt: {
      rendered: string;
  };
  date: string;
  modified: string;
  slug: string;
}
