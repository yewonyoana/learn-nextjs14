import { API_URL } from "../constants";
import styles from "../../styles/home.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home",
};
async function getBooks() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Homepage() {
  const books = await getBooks();
  return (
    <div>
      <div className={styles.title}>
        The New York Times<br/>Best Seller Explorer
      </div>
      <div className={styles.container}>
        {books.results.map((book) => (
          <div className={styles.contents} key={book.list_name_encoded}>
            <Link href={`/lists/${book.list_name_encoded}`}>
              {book.display_name} <span className={styles.icon}>📚</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}