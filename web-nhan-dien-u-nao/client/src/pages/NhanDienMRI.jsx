import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import customFetch from '../utils/customFetch';


export const action = async ({ request }) => {
    const formData = await request.formData();

    try {
        await customFetch.post('/nhandien', formData);
        toast.success('Nhận diện thành công');
        return redirect('history');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const NhanDienMRI = () => {
    const { user } = useOutletContext();
    const [image, setImage] = useState(null);
    const [result, setResult] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    useEffect(() => {
        if (image) {
            const formData = new FormData();
            formData.append('file', image);

            // Gọi API nhận diện hình ảnh từ server AI khác
            axios.post('http://localhost:8000/api/v1/image/predict', formData)
                .then(response => {
                    console.log('Response from API:', response);
                    if (response.data && response.data.DT) {
                        const aiResult = response.data.DT.result;
                        setResult(aiResult);
                    } else {
                        console.error('Invalid response structure:', response.data);
                        toast.error('Lỗi khi nhận diện hình ảnh: Response không hợp lệ');
                    }
                })
                .catch(error => {
                    console.error('Error from API:', error);
                    if (error.response) {
                        // Lỗi từ server (4xx, 5xx)
                        console.error('Server responded with:', error.response.status);
                        console.error('Response data:', error.response.data);
                    } else if (error.request) {
                        // Không nhận được response từ server
                        console.error('No response received:', error.request);
                    } else {
                        // Lỗi khác
                        console.error('Error setting up the request:', error.message);
                    }
                    toast.error('Lỗi khi nhận diện hình ảnh');
                });
        }
    }, [image]);

    useEffect(() => {
        return () => {
            if (image) {
                URL.revokeObjectURL(image);
            }
        };
    }, [image]);


    return (
        <Wrapper>
            <Form method="post" className="form" encType="multipart/form-data">
                <h4 className="form-title">Nhận Diện Hình Ảnh MRI</h4>

                <div className="upload-section">
                    <div className="upload-item">
                        <p>Chọn ảnh:</p>
                        <input
                            type="file"
                            id="image"
                            name='image'
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />
                        <label htmlFor="image">
                            <img
                                className="upload-icon"
                                src={
                                    image
                                        ? URL.createObjectURL(image)
                                        : '/images/upload_area.png'
                                }
                                alt="Preview"
                            />
                        </label>
                    </div>
                </div>

                <input type="hidden" name="result" value={result} />

                <div className="form-center">
                    <FormRow type="text" name="name" labelText="Tên bệnh nhân" />
                    <FormRow type="text" name="location" labelText="Địa chỉ" />
                    <FormRow type="text" name="email" labelText="email" />
                    <FormRow type="text" name="phone" labelText="Số điện thoại" />
                    <SubmitBtn formBtn ten="Nhận diện" />
                </div>
            </Form>
        </Wrapper>
    );
};

export default NhanDienMRI;