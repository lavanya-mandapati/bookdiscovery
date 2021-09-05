import TextField from '@material-ui/core/TextField';

export type TextFieldProps={
  placeholder?:string;
  value?:unknown;
  type?:string;
  size?:'small'|'medium';
  disableUnderline?:boolean;
  autoFocus?:boolean;
  className?:string;
  onChange?:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const InputField:React.FC<TextFieldProps>= ({placeholder,size,autoFocus,value,type,onChange,disableUnderline,className}) => {
  return (
      <TextField value={value} size={size}  placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} type={type} InputProps={{ disableUnderline: disableUnderline }} className={className}/>
  );

}

export default InputField;