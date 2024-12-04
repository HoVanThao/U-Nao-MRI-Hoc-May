import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';


export const loader = async ({ request }) => {
    try {
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);

        const { data } = await customFetch.get('/nhandien', {
            params,
        });

        return {
            data,
            searchValues: {
                search: '',
                sort: 'newest',
                ...params
            },
        };
    } catch (error) {
        toast.error(error.response.data.msg);
        return error;
    }
};

const AllJobsContext = createContext();

const History = () => {
    const { data, searchValues } = useLoaderData();

    return (
        <AllJobsContext.Provider value={{ data, searchValues }}>
            <SearchContainer />
            <JobsContainer />
        </AllJobsContext.Provider>
    );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default History;
