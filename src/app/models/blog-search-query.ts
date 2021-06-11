import { IBlog } from "./blog";

export interface IBlogSearchQuery {
  sort?: string; /** default: createdAt (desc only) */
  limit?: number; /** default: 20 */
  page?: number; /** start with 1 */
  frontend?: string; /** if 1, get only data which status is true */
  categoryId?: string; /** object id for category */
  search?: string; /** title search */
}

export class BlogSearchQuery implements IBlogSearchQuery {

  get sort() { return this.data.sort || null; }
  get limit() { return this.data.limit || null; }
  get page() { return this.data.page || null; }
  get frontend() { return this.data.frontend || '1'; }
  get search() { return this.data.search || null; }

  get json() {
    const data: IBlogSearchQuery = {
      frontend: this.frontend,
    };
    if(this.sort) { data.sort = this.sort; }
    if(this.limit) { data.limit = this.limit; }
    if(this.page) { data.page = this.page; }
    if(this.search) { data.search = this.search; }
    return data;
  }

  constructor(private data: IBlogSearchQuery = {}) {}
}

export interface IBlogSearchResult {
  data: IBlog[],
  totla: number;
}