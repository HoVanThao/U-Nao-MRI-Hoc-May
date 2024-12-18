# from tensorflow.keras.models import Model
# from tensorflow.keras.layers import Input, Flatten, Dense, Dropout
# from tensorflow.keras.applications.vgg19 import VGG19
# import numpy as np
# from PIL import Image

# # Định nghĩa mô hình
# base_model = VGG19(include_top=False, input_shape=(240, 240, 3))
# x = base_model.output
# flat = Flatten()(x)
# class_1 = Dense(4608, activation='relu')(flat)
# drop_out = Dropout(0.2)(class_1)
# class_2 = Dense(1152, activation='relu')(drop_out)
# output = Dense(2, activation='softmax')(class_2)
# model = Model(base_model.inputs, output)

# # Tải mô hình đã lưu
# # model.load_weights('./model/vgg_unfrozen.h5')
# model.load_weights('./model/vgg19_model_03.weights.h5')

# # Xác định các lớp dự đoán
# class_names = ['nontumorous', 'tumorous']

# def preprocess_image(image):
#     try:
#         # Chuyển đổi hình ảnh sang chế độ RGB nếu cần
#         if image.mode != 'RGB':
#             image = image.convert('RGB')
        
#         # Thay đổi kích thước ảnh
#         image = image.resize((240, 240))  # Kích thước ảnh đầu vào
        
#         # Chuyển đổi ảnh sang mảng numpy và chuẩn hóa giá trị
#         image = np.array(image) / 255.0
        
#         # Thêm chiều batch để phù hợp với đầu vào của mô hình
#         image = np.expand_dims(image, axis=0)
        
#         return image
#     except Exception as e:
#         raise ValueError(f"Lỗi khi tiền xử lý ảnh: {str(e)}")




# from tensorflow.keras.models import load_model
# import numpy as np

# # Tải mô hình đã lưu dưới dạng .keras
# model = load_model('./model/EfficientNet_new_nhieudata.h5')

# # Xác định các lớp dự đoán
# class_names = ['glioma', 'meningioma', 'notumor', 'pituitary']

# def preprocess_image(image):
#     try:
#         # Chuyển đổi hình ảnh sang chế độ RGB nếu cần
#         if image.mode != 'RGB':
#             image = image.convert('RGB')
        
#         # Thay đổi kích thước ảnh
#         image = image.resize((240, 240))  # Kích thước ảnh đầu vào
        
#         # Chuyển đổi ảnh sang mảng numpy và chuẩn hóa giá trị
#         image = np.array(image) / 255.0
        
#         # Thêm chiều batch để phù hợp với đầu vào của mô hình
#         image = np.expand_dims(image, axis=0)
        
#         return image
#     except Exception as e:
#         raise ValueError(f"Lỗi khi tiền xử lý ảnh: {str(e)}")
    

from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image


model = load_model('./model/model_mobilenet_12k_2.h5')

class_names = ['glioma', 'meningioma', 'notumor', 'pituitary']


def preprocess_image(image):
    try:
        

        if image.mode != 'RGB':  
            image = image.convert('RGB')  
        
        # Thay đổi kích thước ảnh
        image = image.resize((224, 224))    
        
        
        image = np.array(image) / 255.0
        
        
        image = np.expand_dims(image, axis=-1)  
        image = np.expand_dims(image, axis=0)   
        
        return image
    except Exception as e:
        raise ValueError(f"Lỗi khi tiền xử lý ảnh: {str(e)}")
