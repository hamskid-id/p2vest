'use client'

import { cn } from '@/lib/utils'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

type InputCategory = 'input' | 'textArea' | 'radio' | 'select'

interface SelectOption {
  value: string
  title: string
}

interface RadioOption {
  value: string
  label: string
}

// Main component props interface
interface InputFieldProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  labelStyle?: string
  label?: string
  inputCategory: InputCategory
  inputType?: HTMLInputTypeAttribute
  readOnly?: boolean
  autoFocus?: boolean
  value?: string | number
  handleValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
  inputStyle?: string
  hideTopBorder?: boolean
  placeholder?: string
  selectList?: SelectOption[]
  radioList?: RadioOption[]
}

export const InputField = <T extends FieldValues>({
  control,
  name,
  labelStyle,
  label,
  inputCategory,
  inputType,
  readOnly = false,
  autoFocus = false,
  value,
  handleValueChange,
  inputStyle,
  hideTopBorder = false,
  placeholder,
  selectList,
  radioList,
}: InputFieldProps<T>) => {
    
  const inputCnStyle = cn(
    `w-full md:text-md text-white/40 text-md font-[400] bg-transparent outline-none border border-white/40 shadow-none h-[50px] rounded-[8px] flex items-center`,
    inputStyle,
    hideTopBorder &&
      'border-t-0 border-x-0 shadow-none px-0 focus-visible:border-t-0 focus-visible:border-x-0 focus-visible:ring-0'
  )

  const inputLabelStyle = cn(`text-[16px] font-[500]`, labelStyle)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={inputLabelStyle}>{label}</FormLabel>}
          {inputCategory === 'input' && (
            <FormControl>
              {handleValueChange ? (
                <Input
                  defaultValue={value}
                  readOnly={readOnly}
                  autoFocus={autoFocus}
                  type={inputType || 'text'}
                  className={inputCnStyle}
                  placeholder={placeholder}
                  onChange={handleValueChange}
                />
              ) : inputType === 'number' ? (
                <Input
                  readOnly={readOnly}
                  autoFocus={autoFocus}
                  type={inputType}
                  className={inputCnStyle}
                  min={1}
                  placeholder={placeholder}
                  {...field}
                />
              ) : (
                <Input
                  autoFocus={autoFocus}
                  readOnly={readOnly}
                  type={inputType || 'text'}
                  className={inputCnStyle}
                  placeholder={placeholder}
                  {...field}
                />
              )}
            </FormControl>
          )}
          {inputCategory === 'textArea' && (
            <FormControl>
              <Textarea
                readOnly={readOnly}
                className={cn(inputCnStyle,'h-[144px]')}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          )}
          {inputCategory === 'radio' && radioList && (
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex space-x-4 flex-wrap'
            >
              {radioList.map((radio, index) => (
                <FormItem
                  className='flex items-center space-x-3 space-y-0 mt-4'
                  key={index}
                >
                  <FormControl>
                    <RadioGroupItem value={radio.value} />
                  </FormControl>
                  <FormLabel className='font-normal'>{radio.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          )}
          {inputCategory === 'select' && selectList && (
            <div className='relative w-full'>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={readOnly}
              >
                <FormControl className='w-full h-[50px]'>
                  <SelectTrigger className={inputCnStyle}>
                    <SelectValue
                      placeholder={placeholder}
                      className='flex items-center text-[11.04px] font-[400] w-full h-[50px]'
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectList.map((item, index) => (
                    <SelectItem
                      value={item.value}
                      key={index}
                      className='flex items-center text-[11.04px] font-[400] w-full h-[50px]'
                    >
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
