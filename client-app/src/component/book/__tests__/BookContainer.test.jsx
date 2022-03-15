import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";
import getBooksAction from "../../../module/book/bookAction";

jest.mock('../BookList');
jest.mock("../../../module/book/bookAction");
describe('BookContainer', () => {

    beforeAll(() => {
        BookList.mockImplementation(() => <div>mock booklist comp</div>);
    })

    it('should render without error', () => {
        const books = [{
            id: 1,
            title: 'test title',
            description: 'desc',
            releaseYear: 2022
        }];

        getBooksAction.mockImplementation(() => ({ type : 'BOOKLIST', payload: books}));

        renderWithRedux(<BookContainer />, {});

        expect(BookList).toHaveBeenCalledWith({books}, {});
    });

    it('should show loader when isPening true', () => {
        getBooksAction.mockImplementation(() => ({ 
            type : 'BOOKLISTPENDING',
        }));
        const { getByTestId } =  renderWithRedux(<BookContainer />, {});
        expect(getByTestId('book-loader')).toBeInTheDocument();
    });

    it('should show error when error ocurred', () => {
        getBooksAction.mockImplementation(() => ({ 
            type : 'BOOKLISTERROR',
        }));
        const { getByTestId } =  renderWithRedux(<BookContainer />, {});
        expect(getByTestId('book-error-message')).toBeInTheDocument();
    });
});
