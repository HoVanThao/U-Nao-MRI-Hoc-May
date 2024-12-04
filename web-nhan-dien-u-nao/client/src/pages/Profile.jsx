import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();

    // const file = formData.get('avatar');
    // if (file && file.size > 500000) {
    //     toast.error('Kích thước hình ảnh quá lớn');
    //     return null;
    // }

    try {
        await customFetch.patch('/users/update-user', formData);
        toast.success('Cập nhật hồ sơ thành công');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
    return null;
};

const Profile = () => {
    const { user } = useOutletContext();
    const { name, lastName, email, location } = user;

    return (
        <Wrapper>
            <Form method='post' className='form' encType='multipart/form-data'>
                <h4 className='form-title'>Hồ sơ</h4>

                <div className='form-center'>
                    <div className='form-row'>
                        <label htmlFor='image' className='form-label'>
                            Chọn ảnh (max 0.5 MB):
                        </label>
                        <input
                            type='file'
                            id='avatar'
                            name='avatar'
                            className='form-input'
                            accept='image/*'
                        />
                    </div>
                    <FormRow type='text' name='name' labelText='Tên' defaultValue={name} />
                    <FormRow
                        type='text'
                        labelText='Họ'
                        name='lastName'
                        defaultValue={lastName}
                    />
                    <FormRow type='email' name='email' labelText='Email' defaultValue={email} />
                    <FormRow type='text' name='location' labelText='Địa chỉ' defaultValue={location} />
                    <SubmitBtn formBtn ten={'Cập nhật thông tin'} />
                </div>
            </Form>
        </Wrapper>
    );
};

export default Profile;