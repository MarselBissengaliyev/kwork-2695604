"use client";
import { useEffect, useState } from "react";
import css from "./BlogContent.module.scss";

export const BlogContent = ({ posts, results, pagination, countryCode }) => {
  const [formattedPosts, setFormattedPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(pagination.page);

  useEffect(() => {
    const formatDate = (date) => {
      const d = new Date(date);
      const options = { year: "numeric", month: "short", day: "numeric" };
      return d.toLocaleDateString("en-GB", options);
    };

    const updatedPosts = posts.map((post) => ({
      ...post,
      formattedDate: formatDate(post.created_at),
    }));

    setFormattedPosts(updatedPosts);
  }, [posts]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.pages) {
      window.location.href = `/blog?page=${newPage}&country=${countryCode}`;
    }
  };

  const renderPaginationNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Максимальное количество страниц для отображения
    const range = 2; // Погрешность для отображения диапазонов страниц (например, 3, 4, 5 и т.д.)
    
    // Добавляем предыдущие и последующие страницы
    for (let i = Math.max(1, currentPage - range); i <= Math.min(currentPage + range, pagination.pages); i++) {
      pageNumbers.push(i);
    }

    // Добавляем "..." если нужно
    if (pageNumbers[0] > 1) {
      pageNumbers.unshift("...");
    }
    if (pageNumbers[pageNumbers.length - 1] < pagination.pages) {
      pageNumbers.push("...");
    }

    return pageNumbers;
  };

  return (
    <section className={css.section}>
      <div className={css.container + " tw-container"}>
        <div className={css.block}>
          <h2>
            911 GT3 with Manthey Kit <br /> Is Quicker at the 'Ring
          </h2>
        </div>
        <div className={css.articles}>
          {formattedPosts.map((p) => (
            <div className={css.article} key={p.id}>
              <img className={css.img} src={p.picture} alt="" />
              <div className={css.content}>
                <a href="#">
                  <h4>{p.seo_title}</h4>
                </a>
                <p>{p.seo_description}</p>
                <div className={css.footer}>
                  <div className={css.date}>
                    <i className="ri-calendar-line"></i>
                    <span>{p.formattedDate}</span>
                  </div>
                  <a href={p.href}>
                    <span>Read More</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={css.pagination}>
          <button
            className={css.pageButton}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          {/* Цифры страниц */}
          {renderPaginationNumbers().map((page, index) => (
            <button
              key={index}
              className={`${css.pageNum} ${page === currentPage ? css.active : ""}`}
              disabled={page === "..."}
              onClick={() => page !== "..." && handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            className={css.pageButton}
            disabled={currentPage === pagination.pages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
