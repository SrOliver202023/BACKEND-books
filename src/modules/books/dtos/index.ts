interface ICreateBookDTO {
  isbn_13: string;
  isbn_10: string;
  title: string;
  number_of_pages: number;
  edition_count: number;
  cover: string;
  author_id: string;
  publish_date: string;
}
export { ICreateBookDTO };
