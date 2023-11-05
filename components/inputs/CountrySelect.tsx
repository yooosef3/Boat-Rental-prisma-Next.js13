"use client";

import React from "react";
import Select from "react-select";
import useCountries from "@/hooks/useCountries";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  
  return (
    <div>
      <Select
        placeholder="مکان قایق خود را انتخاب کنید"
        isClearable
        options={getAll()}
        value={value}
        onChange={(selectedValue) => onChange(selectedValue as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div
            className="
          flex items-center gap-3"
          >
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
            control: ()=> 'p-2 border-2',
            input: () => 'text-lg',
            option: () => 'text-lg'
        }}
        theme={(theme) => ({
            ...theme,
            borderRadius:6,
            colors:{
                ...theme.colors,
                primary: 'black',
                primary25: '#e1caa8'
            }
        })}
      />
    </div>
  );
};

export default CountrySelect;
