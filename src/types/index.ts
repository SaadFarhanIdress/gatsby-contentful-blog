export interface Node {
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

export interface References {
  file: {
    url: string;
  }
}

export interface Edges {
  node: node
}

export interface Slugs {
  node: {
    slug: string;
  }
}