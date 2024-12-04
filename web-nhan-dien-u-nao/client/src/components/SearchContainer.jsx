import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { SORT_BY } from '../utils/constants';
import { useAllJobsContext } from '../pages/History';

const SearchContainer = () => {
    const { searchValues } = useAllJobsContext();
    const { search = '', sort = 'newest' } = searchValues || {};

    const submit = useSubmit();

    const debounce = (onChange) => {
        let timeout;
        return (e) => {
            const form = e.currentTarget.form;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onChange(form);
            }, 2000);
        };
    };

    return (
        <Wrapper>
            <Form className='form'>
                <h5 className='form-title'>Tìm kiếm</h5>
                <div className='form-center'>
                    {/* search position */}
                    <FormRow
                        type='search'
                        name='search'
                        defaultValue={search}
                        labelText='Nhập tìm Kiếm'
                        onChange={debounce((form) => {
                            submit(form);
                        })}
                    />
                    <FormRowSelect
                        labelText='Sắp xếp'
                        name='sort'
                        defaultValue={sort}
                        list={[...Object.values(SORT_BY)]}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                    />
                    <Link to='/dashboard/history' className='btn form-btn delete-btn'>
                        Đặt lại giá trị
                    </Link>
                </div>
            </Form>
        </Wrapper>
    );
};

export default SearchContainer;
