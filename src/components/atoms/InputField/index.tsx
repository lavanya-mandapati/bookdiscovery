import TextField from '@material-ui/core/TextField';

export type TextFieldProps={
  placeholder?:string;
  value?:unknown;
  type?:string;
  size?:'small'|'medium';
  disableUnderline?:boolean;
  autoFocus?:boolean;
  onChange?:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const InputField:React.FC<TextFieldProps>= ({placeholder,size,autoFocus,value,type,onChange,disableUnderline}) => {
  return (
      <TextField value={value} size={size}  placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} type={type} InputProps={{ disableUnderline: disableUnderline }}/>
  );

}

export default InputField;