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
  date: Date;
  slug: string;
}
