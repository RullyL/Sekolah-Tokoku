import React, { useState } from 'react';
import { Form, Input, Radio, Alert } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const InputComp = {
    InputCommon: ({ name,
        placeholder,
        messages,
        required,
        type,
        value,
        onChange, }) => {
        return (<div>
            <Form.Item
                className="mb-5"
                name={name}
                rules={[{ required, message: messages }]}
            >
                <Input
                    type={type}
                    placeholder={placeholder}
                    className='w-full h-[55px]'
                    value={value}
                    onChange={onChange}
                />
            </Form.Item>
        </div>)
    },
    InputPass: ({ name,
        placeholder,
        className,
        required,
        messages,
        value,
        onChange, }) => {
        return (
            <div>
                <Form.Item
                    className="mb-6"
                    name={name}
                    rules={[{ required, message: messages }]}
                >
                    <Input.Password
                        className="w-[full] h-[55px] px-3 rounded-lg"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        // eslint-disable-next-line react/no-unstable-nested-components
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                </Form.Item>
            </div>
        )
    },
    InputSubmit: ({ value }) => {
        return <input type="submit" value={value} className=" w-full text-center text-[#fff] bg-[#204D84] font-[600] h-[54px] mt-[-10px] rounded-lg cursor-pointer" />
    },
    InputOption: (() => {
        const [selectedOption, setSelectedOption] = useState(null);

        const handleOptionChange = (e) => {
            setSelectedOption(e.target.value);
        };

        return (
            <div className='flex flex-col'>
                <Radio.Group onChange={handleOptionChange} className='flex flex-col gap-8' value={selectedOption}>
                    <Radio value="option1">Opsi 1</Radio>
                    <Radio value="option2">Opsi 2</Radio>
                </Radio.Group>
                <br />
                {selectedOption && (
                    <Alert
                        message={`Anda telah memilih: ${selectedOption}`}
                        type="success"
                        showIcon
                    />
                )}
            </div>

        );
    }
    )

}

export default InputComp
