import React from 'react'
import {ListOfCategory} from './componets/ListOfCategory'
import { GlobalStyles } from './GlobalStyles';
import { ListOfPhotoCard } from './componets/ListOfPhotoCard';
import { Logo } from './componets/Logo';

export const App = () =>(
    <div>
        <GlobalStyles />
        <Logo/>
        <ListOfCategory/>
        <ListOfPhotoCard/>
    </div>
   );

