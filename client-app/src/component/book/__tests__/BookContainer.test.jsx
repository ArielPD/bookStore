import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";
import { jsxEmptyExpression } from "@babel/types";

jest.mock('../BookList');
describe('BookContainer', () => {

    beforeAll(() => {
        BookList.mockImplementation(() => <div>mock booklist comp</div>);
    })

    it('should render with without error', () => {
        const books = [{
            id: 1,
            title: 'test title',
            description: 'desc',
            releaseYear: 2022
        }];

        renderWithRedux(<BookContainer />, {
            initialState: {
                bookReducer: {
                    books
                }
            }
        })

        expect(BookList).toHaveBeenCalledWith({books}, {});
    })
});
