import Avatar from '@material-ui/core/Avatar';



export type AvatarProps={
    image?:string;
    letter?:string;
    className?:string;
};
  
const AvatarAtom:React.FC<AvatarProps>= ({image,letter,className}) => {

    return (
        <>
        {!letter && <Avatar alt="userAvatar" src={image} className={className} />}
        {letter && <Avatar className={className} >{letter}</Avatar>}
        </>
    );
}

export default AvatarAtom;