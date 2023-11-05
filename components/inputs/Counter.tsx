import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import React, { useCallback } from 'react';

interface CounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
  }

const Counter:React.FC<CounterProps> = ({title, subtitle, onChange, value}) => {
    const onAdd = useCallback(() => {
        onChange(value + 1);
      }, [onChange, value]);
    
      const onReduce = useCallback(() => {
        if (value === 1) {
          return;
        }
    
        onChange(value - 1);
      }, [onChange, value]);
    return (
        <div className='flex bg-slate-200 p-2 shadow-md rounded-md items-center justify-between'>
            <div>
                <h3 className='text-sm text-gray-800 medium'>{title}</h3>
                <p className='text-xs text-gray-500 '>{subtitle}</p>
            </div>
            <div className='flex items-center gap-2'>
                <FiPlusCircle className='text-xl cursor-pointer text-gray-600' onClick = {onAdd} />
                <h2 className='bold text-lg pt-1'>{value}</h2>
                <FiMinusCircle className='text-xl cursor-pointer text-gray-600' onClick={onReduce} />
            </div>
        </div>
    );
};

export default Counter;