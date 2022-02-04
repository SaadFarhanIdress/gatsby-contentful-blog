export interface node {
  author: string;
  slug: string;
  title: string;
  image: {
    file: {
      url: string;
    }
  }
  createdAt: string;
  content?: any;
}

export interface edges {
  node: node
}

export interface slugs {
  node: {
    slug: string;
  }
}