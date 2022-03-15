package com.apd.bookstore.repository;

import com.apd.bookstore.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {
    List<Book> findBooksByTitle(String title);

    @Query("SELECT p FROM Book p WHERE LOWER(p.title) LIKE %?1%")
    List<Book> findBookByTitleIgnoreCases(String title);
}
