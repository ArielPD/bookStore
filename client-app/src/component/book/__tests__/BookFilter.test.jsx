import { fireEvent } from '@testing-library/react';
import React from 'react';
import { getBooksByTitle } from '../../../module/book/bookAction';
import renderWithRedux from '../../../util/testUtil';
import BookFilter from '../BookFilter';

jest.mock('../../../module/book/bookAction');
describe('BookFilter', () => {

    it('should fire getBooksByTitle action on click of search button', () => {

       const {getByLabelTest, getByText} =  renderWithRedux(<BookFilter />, {});
        getBooksByTitle.mockImplementation(() => (dispatch) => {});
       const textField = getByLabelTest('Enter book title');
       fireEvent.change(textField, { target: { value: 'test title'} } )
       
       const searchButton = getByText('Search');
       fireEvent.click(searchButton);

       expect(getBooksByTitle).toHaveBeenCalledWith('test title');
    });
})