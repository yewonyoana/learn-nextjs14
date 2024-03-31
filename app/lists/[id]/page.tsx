import { Suspense } from "react";
import BookDetailInfo, { getBook } from "../../../components/book";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const books = await getBook(id);
  return {
    title: books.results.list_name,
  };
}

export default function Bookpage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading book info</h1>}>
        <BookDetailInfo id={id} />
      </Suspense>
    </div>
  );
}