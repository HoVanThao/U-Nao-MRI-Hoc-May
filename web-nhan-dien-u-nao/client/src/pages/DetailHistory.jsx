import React, { useState, useEffect } from 'react';
import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import FormRowShow from '../components/FormRowShow';

const DetailHistory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customFetch.get(`/nhandien/${id}`);
                setData(response.data);
            } catch (error) {
                toast.error(error.response.data.msg);
                navigate('/dashboard/history');
            }
        };

        fetchData();
    }, [id, navigate]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const nhandien = data.nhandien;

    if (!nhandien) {
        return <div>Không có dữ liệu nhận diện.</div>;
    }

    return (
        <Wrapper>
            <h4 className="form-title">Lịch sử chi tiết Nhận Diện Hình Ảnh MRI</h4>

            <div className="upload-section">
                <div className="upload-item">
                    <p>Hình ảnh:</p>
                    <img
                        className="upload-icon"
                        src={
                            nhandien.image
                                ? nhandien.image
                                : '/images/upload_area.png'
                        }
                        alt="Preview"
                    />
                </div>
            </div>

            <div className="form-center">
                <FormRowShow type="text" name="name" labelText="Tên bệnh nhân" value={nhandien.name} readOnly />
                <FormRowShow type="text" name="location" labelText="Địa chỉ" value={nhandien.location} readOnly />
                <FormRowShow type="text" name="email" labelText="email" value={nhandien.email} readOnly />
                <FormRowShow type="text" name="phone" labelText="Số điện thoại" value={nhandien.phone} readOnly />
                <FormRowShow type="text" name="result" labelText="Kết quả" value={nhandien.result} readOnly />
            </div>
        </Wrapper>
    );
};

export default DetailHistory;