import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  // name:'email' | 'password',

  name: FieldPath<z.infer<typeof formSchema>>
  label: string,
  placeholder: string,

}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {

  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (input.length >= 3 && input.length <= 4) input = input.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    else if (input.length > 4) input = input.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    field.onChange(input); // Update form field value
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className='form-label'>{label}</FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={name === 'password' ? 'password' : 'text'}
                value={field.value || ''}
                {...(name === 'dateOfBirth' && {
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleDateOfBirthChange(e, field),
                })}
                {...(name !== 'dateOfBirth' && { ...field })}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>

      )}
    />
  )
}

export default CustomInput
