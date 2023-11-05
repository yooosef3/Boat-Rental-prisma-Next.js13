// "use client"

// import { FieldValues, useForm } from 'react-hook-form';
// import React, { useState } from 'react';

// import { FaSailboat } from 'react-icons/fa6';
// import Input from '../inputs/Input';
// import Section from './Section';
// import SubTitle from './SubTitle';
// import Title from './Title';

// const DescribeBoat = () => {
//     return (
//     <Section>
//       <div className="flex gap-2">
//         <FaSailboat className='text-[#998363]' />
//         <div>
//           <Title title='قایق خود را چگونه توصیف میکنید؟' />
//           <SubTitle text='مختصر و مفید!' />
//         </div>
//       </div>
//       <div className='flex flex-col mt-5 md:flex-row items-center gap-5'>

//       <Input
//           id="title"
//           label="عنوان"
//           disabled={isLoading}
//           register={register}
//           errors={errors}
//           required
//           />
//         <Input
//           id="description"
//           label="توضیحات"
//           disabled={isLoading}
//           register={register}
//           errors={errors}
//           required
//           />
//           </div>
//     </Section>
//     );
// };

// export default DescribeBoat;