import Avatar from '@material-ui/core/Avatar';
  
export type AvatarProps={
    src?:string;
    children?:string;
    className?:string;
    variant?:'rounded'|'square'|'circular'|'circle';
};
  
const AvatarAtom:React.FC<AvatarProps>= ({src,children,variant,className}) => {
    return (
        <Avatar alt="User Avatar" src={src} variant={variant} className={className} children={children}/>
    );
}

export default AvatarAtom;