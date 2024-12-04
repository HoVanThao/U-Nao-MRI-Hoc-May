import React from 'react';

import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
    { text: 'Nhận diện ảnh MRI', path: '.', icon: <FaWpforms /> },
    { text: 'Lịch sử nhận diện', path: 'history', icon: <MdQueryStats /> },
    { text: 'Hồ sơ người dùng', path: 'profile', icon: <ImProfile /> },
];

export default links;