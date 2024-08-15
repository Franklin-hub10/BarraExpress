import React from 'react';
import { ImageBackground, Text, useWindowDimensions } from 'react-native';
import { styles } from '../appTheme/AppTheme';

 
//interface - props
interface Props {
    title: string;
}
 
export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
<Text style={{
            ...styles.globalTitle,
            height:height*0.12
            }}>

        

            {title}
</Text>
    )
}