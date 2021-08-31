import { ThemeProvider } from '@material-ui/core';
import Button from './components/atoms/Button/Button';
import Logo from './components/atoms/Logo/Logo';
import theme  from './theme/theme';


export const App = () => {
    return (<ThemeProvider theme={theme}> <div><Button name="Discover" variant="contained"/> 
    <Button name="Reply" variant="outlined" />
    <Logo /> </div></ThemeProvider>) ;
}