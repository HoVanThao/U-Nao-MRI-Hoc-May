import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ params }) => {
    try {
        await customFetch.delete(`/nhandien/${params.id}`);
        toast.success('Xóa thành công');
    } catch (error) {
        toast.error(error.response.data.msg);
    }
    return redirect('/dashboard/history');
};