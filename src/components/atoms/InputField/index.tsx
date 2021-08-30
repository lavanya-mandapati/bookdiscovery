import { InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    input: {
        width: '400px',
        height:'38px',
    }
  }));
  

export type InputFieldProps={
  placeholder?:string;
  value:unknown;
  onChange?:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const InputField:React.FC<InputFieldProps>= ({placeholder,value,onChange}) => {

    const classes = useStyles();
    return (
        <InputBase  className={classes.input} placeholder={placeholder} value={value} onChange={onChange}></InputBase>
    );

}

export default InputField