import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from "./main/components/Navigation";
import Body from "./main/components/Body";

export default function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Navigation/>
                <Body/>
            </div>
        </ChakraProvider>
    );
}
