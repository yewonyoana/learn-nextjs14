import styles from "../styles/book.module.css";

export async function getBook(id: string) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  const json = await response.json();
  return json;
}

export default async function BookDetailInfo({ id }: { id: string }) {
  const book = await getBook(id);
  return (
    <>
      <div className={styles.title}>{book.results.list_name}</div>
      <div className={styles.container}>
        {book.results.books.map((i) => (
          <div className={styles.contents} key={i.rank}>
            <a href={i.amazon_product_url} title={i.title} target="_blank" className={styles.url}>
              <div>
                <img className={styles.img} src={i.book_image} alt={i.title} />
              </div>
              <div className={styles.data}>
                <div className={styles.subtitle}>{i.title}</div>
                <div className={styles.publisher}>Publisher: {i.publisher}</div>
                <div className={styles.rank}>Rank: {i.rank} 🔥</div>
                <div className={styles.description}>{i.description}</div>
                <p className={styles.link}>Buy Now</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}