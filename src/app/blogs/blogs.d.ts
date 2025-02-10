export interface BlogPostsConnectionData {
  blogPosts_connection: BlogPostsConnection;
}

export interface BlogPostsConnection {
  pageInfo: PageInfo;
  nodes: Node[];
}

export interface PageInfo {
  total: number;
  pageSize: number;
  pageCount: number;
  page: number;
}

export interface Node {
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  blog_category: BlogCategory;
  image: Image;
  documentId: string;
}

export interface BlogCategory {
  category_name: string;
}

export interface Image {
  url: string;
}
