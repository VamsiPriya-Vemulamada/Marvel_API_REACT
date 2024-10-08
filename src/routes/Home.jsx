
import SearchBar from "../components/SearchBar"
import container from "../components/Container"
import Grid from "../components/Grid"
import { useState } from "react";

export default function Home(){

const[ heros, setHeroes] = useState([])
    return (
       <container>
        <h1>Let's see the Marvel Heros</h1>
        <SearchBar setter ={setHeroes}/>
        <Grid>
            <div>

            </div>
        </Grid>
       </container>
        
    
)
}