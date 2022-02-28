package com.apd.bookstore.service;

import com.apd.bookstore.dto.BookDto;
import com.apd.bookstore.model.Book;
import com.apd.bookstore.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class BookService {

    private final BookRepository bookRepository;

    private final ModelMapper modelMapper;

    public BookService(BookRepository bookRepository, ModelMapper modelMapper) {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }

    public List<BookDto> getBooks() {
        Iterable<Book> all = bookRepository.findAll();
        return StreamSupport.stream(all.spliterator(), false)
                .map(convertBookModelToBookDto())
                .collect(Collectors.toList());
    }

    private Function<Book, BookDto> convertBookModelToBookDto() {
        return book -> modelMapper.map(book, BookDto.class);
    }

    public List<Book> getBooksNoDto() {
        Iterable<Book> bookList = bookRepository.findAll();
        return StreamSupport.stream(bookList.spliterator(), false).collect(Collectors.toList());
    }

}
